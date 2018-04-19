class TreeNode {
  public static makeTree(obj: any) {
    const root = new TreeNode(obj.val);
    if (obj.children) {
      for (const item of obj.children) {
        root.children.push(TreeNode.makeTree(item));
      }
    }
    return root;
  }
  public val: string;
  public children: TreeNode[] = [];
  public constructor(val: any) {
    this.val = val;
  }
}

interface Size {
  width: number;
  height: number;
}

interface Position {
  left: number;
  top: number;
}

const CHAR = {
  DOWN: '┬',
  DOWN_UP: '┼',
  LEFT: '┌',
  LEFT_RIGHT: '│',
  LEFT_UP: '├',
  LINE: '─',
  RIGHT: '┐',
  RIGHT_UP: '┤',
  SPACE: ' ',
  UP: '┴'
};

class PrintNode extends TreeNode {
  public static TreeToPrintTree(root: any) {
    const printRoot = new PrintNode(root.val);
    printRoot.printChildren = [] as PrintNode[];
    for (const item of root.children) {
      printRoot.printChildren.push(PrintNode.TreeToPrintTree(item));
    }
    return printRoot;
  }
  public size: Size = <Size>{};
  public printChildren: PrintNode[] = [];
  private childrenSize: Size = {} as Size;
  public prepareSize() {
    let sizes: Size[];
    sizes = this.printChildren.map(item => {
      item.prepareSize();
      return item.size;
    });

    switch (this.printChildren.length) {
      case 0:
        this.size.height = 1;
        this.size.width = this.val.length;
        this.childrenSize.width = 0;
        this.childrenSize.height = 0;
        break;
      case 1:
        this.size.height = sizes[0].height + 2;
        this.size.width = Math.max(sizes[0].width, this.val.length);
        this.childrenSize = sizes[0];
        break;
      default:
        let childrenMaxHeight = 0;
        let childrenTotalWidth = -1;
        for (const item of sizes) {
          childrenMaxHeight = Math.max(childrenMaxHeight, item.height);
          childrenTotalWidth += item.width + 1;
        }

        this.size.height = childrenMaxHeight + 2;
        this.size.width = Math.max(childrenTotalWidth, this.val.length);
        this.childrenSize.width = childrenTotalWidth;
        this.childrenSize.height = childrenMaxHeight;
    }
  }
  public print(start: Position, arr: string[][]) {
    const line0Start = Math.floor(
      start.left + (this.size.width - this.val.length) / 2
    );
    this.writeArr(
      arr,
      { left: line0Start, top: start.top } as Position,
      this.val
    );
    switch (this.printChildren.length) {
      case 0:
        break;
      case 1:
        const line1Start = Math.floor(line0Start + this.val.length / 2);
        this.writeArr(
          arr,
          { left: line1Start, top: start.top + 1 } as Position,
          CHAR.LEFT_RIGHT
        );
        const line2Start = Math.floor(
          line0Start +
            this.val.length / 2 -
            this.printChildren[0].size.width / 2
        );
        this.printChildren[0].print(
          { left: line2Start, top: start.top + 2 } as Position,
          arr
        );
        break;
      default:
        const upPosition = Math.floor(this.size.width / 2);
        const downPositions: number[] = [];
        let startLeft = 0;
        if (this.childrenSize.width < this.size.width) {
          startLeft = Math.floor(
            (this.size.width - this.childrenSize.width) / 2
          );
        }
        for (const item of this.printChildren) {
          downPositions.push(Math.floor(startLeft + item.size.width / 2));
          startLeft += 1 + item.size.width;
        }
        const charArr = new Array(this.size.width);
        charArr.fill(CHAR.SPACE);
        for (
          let i = downPositions[0];
          i <= downPositions[downPositions.length - 1];
          i++
        ) {
          charArr[i] = CHAR.LINE;

          if (downPositions.indexOf(i) === 0) {
            charArr[i] = CHAR.LEFT;
            continue;
          }

          if (downPositions.indexOf(i) === downPositions.length - 1) {
            charArr[i] = CHAR.RIGHT;
            continue;
          }

          if (downPositions.indexOf(i) !== -1) {
            charArr[i] = CHAR.DOWN;
          }
        }
        charArr[upPosition] =
          charArr[upPosition] === CHAR.DOWN ? CHAR.DOWN_UP : CHAR.UP;

        this.writeArr(
          arr,
          { left: start.left, top: start.top + 1 } as Position,
          charArr
        );

        const n = {} as Position;
        if (this.childrenSize.width < this.size.width) {
          n.left = Math.floor(
            start.left + (this.size.width - this.childrenSize.width) / 2
          );
        } else {
          n.left = start.left;
        }
        n.top = start.top + 2;
        for (let i = 0; i < this.printChildren.length; i++) {
          this.printChildren[i].print(n, arr);
          n.left += this.printChildren[i].size.width + 1;
        }
    }
  }
  private writeArr(arr: string[][], start: Position, str: string | string[]) {
    for (let i = 0; i < str.length; i++) {
      arr[start.top][start.left + i] = str[i];
    }
  }
}

let tree = TreeNode.makeTree({
  children: [
    { val: 'asdfasdf', children: [{ val: '123' }, { val: '123' }] },
    {
      val: 'asdfasd',
      children: [
        {
          val: 'asdawefsadfaewafwaefasdfasd',
          children: [
            {
              val: '2134'
            }
          ]
        },
        {
          val: 'asdawefsadfaewafwaefasdfasd',
          children: [
            {
              val: '2134',
              children: [
                {
                  val: '1234'
                },
                {
                  val: '1234'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  val: 'asdfasdf'
});

let printTree = PrintNode.TreeToPrintTree(tree);

printTree.prepareSize();
let size = printTree.size;
let arr = new Array();
for (let i = 0; i < size.height; i++) {
  const tmpArr = new Array(size.width);
  tmpArr.fill(' ');
  arr.push(tmpArr);
}

printTree.print(
  {
    left: 0,
    top: 0
  } as Position,
  arr
);

for (const row of arr) {
  console.log(row.join(''));
}
