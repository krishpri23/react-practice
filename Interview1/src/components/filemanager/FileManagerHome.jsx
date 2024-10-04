import { useState } from "react";
import data from "./data.json";
import Folder from "./Folder";
import useTraverseTree from "./useTraverseTree";

const FileManagerHome = () => {
  const [explorerData, setExplorerData] = useState(data);
  console.log(explorerData);

  const insertNode = useTraverseTree();

  const handleInsertion = (id, isFolder, name) => {
    console.log("inside insertion", id, isFolder, name);
    const finalTree = insertNode(explorerData, id, isFolder, name);
    setExplorerData(finalTree);
  };

  return (
    <div className="manager-home">
      {" "}
      <h1> File explorer</h1>
      {/* We are calling the component for each level of tree so id will be just one number */}
      <Folder explorer={explorerData} handleInsertion={handleInsertion} />
    </div>
  );
};

export default FileManagerHome;
