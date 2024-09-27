import { useState } from "react";

const FileManagerHome = () => {
  const [folders, setFolders] = useState([
    {
      title: "components",
      isOpen: true,
      subfolders: [
        {
          id: 1,
          title: "accordians",
          files: ["file1", "file2", "file3"],
          isOpen: false,
        },
        {
          id: 2,
          title: "filemanager",
          files: ["manager1", "manager2", "manager3"],
          isOpen: true,
        },
        {
          id: 3,
          title: "trafficlight",
          files: ["traffic1", "traffic2", "traffic3"],
          isOpen: true,
        },
      ],
    },
    {
      title: "public",
      isOpen: true,
      subfolders: [
        {
          title: "images",
          isOpen: true,
        },
        {
          title: "assets",
          isOpen: true,
        },
      ],
    },
  ]);

  return (
    <div className="manager-home">
      <h1> File manager </h1>
      {folders?.map((folder, i) => (
        <div key={i}>
          <div className="folder">
            <button>V</button>
            <div className="folder-item"> {folder.title} </div>
          </div>
          {/* <div> */}{" "}
          {folder.subfolders.map((sub, i) => (
            <div key={i}>
              <div className="subfolder">
                <button>V</button>
                <div className="subfolder-item"> {sub.title} </div>
              </div>
              {sub?.files?.map((file, i) => (
                <div key={i} className="files">
                  {" "}
                  {file}{" "}
                </div>
              ))}{" "}
            </div>
          ))}{" "}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default FileManagerHome;
