/**
 * Please implement this method to traverse the tree 
 * and return the sum of the values of all nodes
 * at the level n in the tree. 
 * Node root is assumed to be at the level 0. All its children are level 1, etc.
 * 
 * The tree is defined as a structure of nodes that have a number value and 0-n children nodes.
 *
 * The tree has following structure:
 
var tree = {
  value: 1,
  children: [
    {
      value: 2, 
      children: []
    },
    {
      value: 5, 
      children: [
        {
          value: 1, 
          children: []
        }
      ]
    }
  ]
};
 
 * Example: For the tree above the function should return:
 * countLevelSum(tree, 0) -> 1
 * countLevelSum(tree, 1) -> 7
 * countLevelSum(tree, 2) -> 1
 */

function countLevelSum(node, level, actualLevel = 0) {
    if (actualLevel === level) {
        return node.value;
    }

    return node.children
        .reduce(
            (_count, child) => _count + countLevelSum(child, level, actualLevel + 1),
            0
        );
}

const tree = {
    value: 1,
    children: [
        {
            value: 2, 
            children: []
        },
        {
            value: 5, 
            children: [
                {
                    value: 1, 
                    children: []
                }
            ]
        }
    ]
};

console.log(countLevelSum(tree, 1));
