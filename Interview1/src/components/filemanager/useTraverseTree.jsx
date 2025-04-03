const useTraverseTree = () => {
  // item - file/folder to insert

  const insertNode = (tree, folderId, isFolder, item) => {
    // check if it is the folder and matches id
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: item,
        items: [],
      });
      console.log(tree, 'inside node');
      return tree;
    }

    // traversing through children of the current node, if the folder id does not match
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      console.log('inside latestNode', obj);
      // In every recursive call, these params remain same because just the obj is getting traversed.
      return insertNode(obj, folderId, isFolder, item);
    });

    return { ...tree, items: latestNode };
  };

  return insertNode;
};

export default useTraverseTree;
