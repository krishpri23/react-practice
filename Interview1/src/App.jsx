import './App.css';
// import Autocomplete from './components/autocomplete/Autocomplete';
// import Modal from './components/modals/Modal';
// import FileManagerAkshay from './components/filemanager/FileManagerAkshay';
// import OTP from "./components/otp/OTP";
// import ProgressBar from "./components/ProgressBar/ProgressBar";
import Todo from './components/Todo/Todo';
import ThemeProvider from './components/Todo/TodoContext';

function App() {
  // const otpCount = 5;

  return (
    <div className="App">
      <ThemeProvider>
        <Todo />
      </ThemeProvider>
      {/* <h1> Progress Bar</h1> */}
      {/* <ProgressBar progress={90} /> */}

      {/* <OTP count={otpCount} /> */}
      {/* <FileManagerAkshay /> */}
      {/* <Autocomplete /> */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
