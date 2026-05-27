class Node {
  constructor(data = 0, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr = []) {
    this.root = this.#buildTree(arr);
  }
  removeDuplicate(array) {
    let arr = [...array];
    let result = [];
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let i = 0;
    while (i < n) {
      while (i + 1 < n && arr[i] === arr[i + 1]) {
        i++;
      }
      result.push(arr[i]);
      i++;
    }
    return result;
  }
  build(array, low, high) {
    if (low > high) return null;
    const mid = Math.floor(low + (high - low) / 2);
    const root = new Node(array[mid]);
    root.left = this.build(array, low, mid - 1);
    root.right = this.build(array, mid + 1, high);
    return root;
  }
  #buildTree(array) {
    const arr = this.removeDuplicate(array);
    const root = this.build(arr, 0, arr.length - 1);
    return root;
  }
  includes(value) {
    if (!this.root) return false;
    let stack = [this.root];
    while (stack.length !== 0) {
      const node = stack.pop();
      if (node.data === value) {
        return true;
      }
      if (value > node.data && node.right) {
        stack.push(node.right);
      }
      if (value < node.data && node.left) {
        stack.push(node.left);
      }
    }
    return false;
  }
  insert(value) {
    this.root = this.insertIntoTree(this.root, value);
  }
  insertIntoTree(root, value) {
    if (root === null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insertIntoTree(root.left, value);
    }
    if (value > root.data) {
      root.right = this.insertIntoTree(root.right, value);
    }
    return root;
  }
  findSuccessor(root) {
    let currNode = root.right;
    while (currNode && currNode.left) {
      currNode = currNode.left;
    }
    return currNode;
  }
  delete(root, value) {
    if (!root) return null;

    if (value > root.data) {
      root.right = this.delete(root.right, value);
    } else if (value < root.data) {
      root.left = this.delete(root.left, value);
    } else {
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }

      const successor = this.findSuccessor(root);
      root.data = successor.data;
      root.right = this.delete(root.right, successor.data);
    }
    return root;
  }
  deleteItem(value) {
    this.root = this.delete(this.root, value);
  }
  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw Error("callback is not function");
    }
    if (!this.root) {
      return;
    }
    let queue = [this.root];
    while (queue.length !== 0) {
      const node = queue.shift();
      callback(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

// craft
const tree = new Tree([10, 10, 9, 9, 8, 7, 7, 7, 6, 5, 1, 1, 1, 2, 3, 3, 3, 4]);
tree.levelOrderForEach(console.log);
prettyPrint(tree.root);

export { Tree };
