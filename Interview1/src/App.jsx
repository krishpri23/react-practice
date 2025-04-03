import './App.css';
import Autocomplete from './components/autocomplete/Autocomplete';
// import FileManagerAkshay from './components/filemanager/FileManagerAkshay';
// import OTP from "./components/otp/OTP";
// import ProgressBar from "./components/ProgressBar/ProgressBar";
// import Todo from "./components/Todo/Todo";

function App() {
  // const otpCount = 5;

  return (
    <div>
      {/* <h1> Progress Bar</h1> */}
      {/* <ProgressBar progress={90} /> */}
      {/* <Todo /> */}
      {/* <OTP count={otpCount} /> */}
      {/* <FileManagerAkshay /> */}
      <Autocomplete />
    </div>
  );
}

export default App;
