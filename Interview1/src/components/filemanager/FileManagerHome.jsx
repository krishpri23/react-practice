import { useState } from "react";
import data from "./data.json";
import Folder from "./Folder";

const FileManagerHome = () => {
  const [explorerData, setExplorerData] = useState(data);
  console.log(explorerData);
  return (
    <div className="manager-home">
      {" "}
      <h1> File explorer</h1>
      <Folder explorer={explorerData} />
    </div>
  );
};

export default FileManagerHome;
