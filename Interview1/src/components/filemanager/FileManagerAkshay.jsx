/** Nested file structure for recursion
 *  expand and collapse for folders
 * add/ remove folder
 *
 */

import { useState } from 'react';
import json from './akshay.json';

// render the list as a separate comp
const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [expand, setExpand] = useState({});

  return (
    <div className="container">
      {list.map((node) => {
        return (
          <div key={node.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setExpand((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
              >
                {' '}
                {expand?.[node.name] ? '-' : '+'}{' '}
              </span>
            )}
            <span> {node.name} </span>
            {node.isFolder && (
              <span
                onClick={() => addNodeToList(node.id)}
                className="add-folder"
              >
                🗂️
              </span>
            )}
            <span onClick={() => deleteNodeFromList(node.id)}>delete </span>
            {expand?.[node.name] && node.children && (
              <List
                list={node.children}
                addNodeToList={addNodeToList}
                deleteNodeFromList={deleteNodeFromList}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function FileManagerAkshay() {
  const [data, setData] = useState(json);

  // we need to add a node to the children of the json data
  const addNodeToList = (parentId) => {
    const name = prompt('enter name');
    // called on the root node
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Date.now(), name: name, isFolder: true, children: [] },
            ],
          };
        }

        // if current node is not the parent, check the children node
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }

        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  // ID of the item to delete
  const deleteNodeFromList = (parentId) => {
    const deleteTree = (list) => {
      return list
        .filter((node) => node.id !== parentId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: deleteTree(node.children),
            };
          }

          return node;
        });
    };
    setData((prev) => deleteTree(prev));
  };

  return (
    <div>
      <h1> File manager Akshay</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}
