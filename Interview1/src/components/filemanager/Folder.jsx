import React, { useState } from "react";

const Folder = ({ explorer, handleInsertion }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  let content;

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput(() => ({ visible: true, isFolder }));
  };

  // we will have the name of file/folder, isFolder, id
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // add DSF algo insert node here
      handleInsertion(explorer.id, showInput.isFolder, e.target.value);
      setShowInput((prev) => ({ ...prev, visible: false }));
    }
  };

  if (explorer.isFolder) {
    content = (
      <div className="manager-home">
        <div className="folder-root">
          <p className="folder-name" onClick={() => setExpand(!expand)}>
            {" "}
            🗂️ {explorer.name}{" "}
          </p>

          <div className="add-buttons">
            <button onClick={(e) => handleNewFolder(e, true)}> 🗂️+ </button>
            <button onClick={(e) => handleNewFolder(e, false)}> 📄+</button>
          </div>
        </div>

        <div>
          {showInput.visible && (
            <div className="input-controller">
              {showInput.isFolder ? (
                <span style={{ paddingRight: "10px" }}> 🗂️</span>
              ) : (
                <span style={{ paddingRight: "10px" }}> 📄</span>
              )}
              <input
                type="text"
                name="add"
                autoFocus
                onKeyDown={(e) => onAddFolder(e)}
                onBlur={(prev) => setShowInput({ ...prev, visible: false })}
              />
            </div>
          )}
        </div>

        <div className="folder">
          {expand &&
            // RENDERS THE CHILDREN OF THE TREE
            explorer.items.map((folder) => (
              <Folder
                key={folder.id}
                explorer={folder}
                handleInsertion={handleInsertion}
              />
            ))}
        </div>
      </div>
    );
  } else {
    content = <p className="files"> 📄 {explorer.name} </p>;
  }
  return content;
};

export default Folder;
