## file manager

- When it comes to displaying folders and files, first create a json file with `isFolder` variable to check for file/folder

- Use `recursion` to call the component for nesting through the deeper levels of json file

- To add a folder/file, create buttons and onClick insert a input text field with `onBlur` and `onKeyDown` props. showInput should have an object {visible, isfolder} to know if we are creating a folder or a file

- JSON data is a like a tree so we need to find the node and add the items to the node. Algo used is depth first search

- Create a custom hook to add the insert node algorithm.

- How the Recursive Component Knows the Current Level?

  - When you click on a folder (e.g., on the second level), the explorer prop for that particular instance of the Folder component contains the data for that specific folder.

  - The Folder component for the second level will only have the information about the second-level folder and its immediate children. Since each Folder instance is scoped to its own explorer data, the recursion isolates the context to the folder level you clicked.
