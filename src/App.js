
import './App.css';
import Main from "./components/Main/Main";
import {Typography} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <Typography variant='h1' color='textSecondary'>
            Contact Book
        </Typography>
      <Main/>
    </div>
  );
}

export default App;
