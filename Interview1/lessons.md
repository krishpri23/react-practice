## Accordian

- Whenever we need to update multiple components on a single click, best approach is to create an array of objects and have isChecked as boolean
- For asynch state updates issue, fix is to create useEffect whenever a state changes and update it

## Lessons:

- Always make a generic components for scalable purpose

## File Manager:

- When it comes to displaying folders and files, first create a json file with `isFolder` variable to check for file/folder

- Use `recursion` to call the component for nesting through the deeper levels of json file

- To add a folder/file, create buttons and onClick insert a input text field with `onBlur` and `onKeyDown` props. showInput should have an object {visible, isfolder} to know if we are creating a folder or a file

- JSON data is a like a tree so we need to find the node and add the items to the node. Algo used is depth first search

- Create a custom hook to add the insert node algorithm.

- How the Recursive Component Knows the Current Level?

  - When you click on a folder (e.g., on the second level), the explorer prop for that particular instance of the Folder component contains the data for that specific folder.

  - The Folder component for the second level will only have the information about the second-level folder and its immediate children. Since each Folder instance is scoped to its own explorer data, the recursion isolates the context to the folder level you clicked.

## File manager akshay

- it is a tree structure and adding a node to a tree
-
- when I try to toggle 1st level folder it toggles 2nd level folder also. FIX: create an obj for expand and store the name of each json data and boolean val. {"public": true}

## Autocomplete

- Makes api call to show the list of results related to the input
- caching, debouncing for complexity
- Break into smaller problems
- debouncing - whenever my inputVal changes, set a timeout for 3 secs, clear the timer if timer is < 3secs.

- my approach was to call the api once and filter the data and display as suggestions
- onBlur and clicking from the suggestions are conflicting. looks important to find a fix
- In such case, useRef comes into handy.

- onBlur, onclick => onBlur is called when input loses the focus only then onClick is called. To stop it, we are using a workaround by adding onMouseDown and preventing the default behavior. onMouseDown event is triggered before onBlur, and that's why e.preventDefault() inside onMouseDown can prevent the onBlur event from firing prematurely.

- To improve performance, we can attach the event listeners to the parent instead of child <span>. (Event delegation)
