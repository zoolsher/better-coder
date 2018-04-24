class ListNode<T> {
  public value: T = null;
  public before: ListNode<T> = null;
  public after: ListNode<T> = null;
  public constructor(value: T) {
    this.value = value;
  }
}

class LRU {
  private length: number = null;
  private currentLength: number = null;
  private dummyHead = new ListNode('HEAD');
  private dummyTail = new ListNode('Tail');
  private start: ListNode<string> = this.dummyHead;
  private end: ListNode<string> = this.dummyTail;
  private map: Map<string, any> = new Map();
  constructor(length: number) {
    if (length <= 0) {
      throw new Error(`length should greater than 0, but got ${length}`);
    }
    this.length = length;
    this.currentLength = 0;
    this.start.after = this.end;
    this.end.before = this.start;
  }
  private addOne(key: string) {
    let willRemove: ListNode<string> = null;
    if (this.currentLength >= this.length) {
      willRemove = this.end.before;
      willRemove.before.after = this.end;
      this.end.before = willRemove.before;
      willRemove.before = null;
      willRemove.after = null;
      this.currentLength--;
    }
    const temp = this.start.after;
    const newNode = new ListNode(key);
    this.start.after = newNode;
    newNode.before = this.start;
    newNode.after = temp;
    temp.before = newNode;
    this.currentLength++;
    return willRemove ? willRemove.value : null;
  }
  public useOne(key: string) {
    if (!this.map.has(key)) {
      throw new Error(`error ${key} not exists`);
    }
    var start = this.start;
    do {
      start = start.after;
      if (start.value === key) {
        const me = start;
        me.before.after = me.after;
        me.after.before = me.before;
        me.before = null;
        me.after = null;
        const queue = this.start.after;
        this.start.after = me;
        queue.before = me;
        me.before = start;
        me.after = queue;
      }
    } while (start.after !== this.end);
  }
  public get(key: string) {
    if (this.map.has(key)) {
      this.useOne(key);
    }
    return this.map.get(key);
  }
  public set(key: string, value: any) {
    if (this.map.has(key)) {
      this.useOne(key);
    } else {
      const removedKey = this.addOne(key);
      removedKey && this.map.delete(removedKey);
    }
    this.map.set(key, value);
  }
  public toString(): string {
    let s = '';
    s += `size: ${this.map.size}`;
    s += `\r\n`;
    let start = this.start;
    do {
      start = start.after;
      s += `${start.value}=>${this.map.get(start.value)}`;
      s += `\r\n`;
    } while (start.after !== this.end);
    return s;
  }
}

let l = new LRU(3);
l.set('s', 123);
l.set('sd', 123);
l.set('sdd', 123);
l.set('sddd', 123);

console.log(l.toString());

l.get('sdd');

console.log(l.toString());

l.get('sd');

console.log(l.toString());
