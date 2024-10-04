import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  let content;

  if (explorer.isFolder) {
    content = (
      <div className="manager-home">
        <h2 onClick={() => setExpand(!expand)}> 🗂️ {explorer.name} </h2>
        <div>
          {expand &&
            explorer.items.map((folder) => (
              <div key={folder.id} className="folder">
                {" "}
                <Folder explorer={folder} />{" "}
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    content = <div className="files"> 📄 {explorer.name} </div>;
  }
  return content;
};

export default Folder;
