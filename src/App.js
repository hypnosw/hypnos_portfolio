import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router";
import {Homepage} from "./Homepage/Homepage";
import {Navbar} from "./Navbar/Navbar";

function App() {
  return (
    <div className="">
        <Navbar/>
        <Routes>
            <Route path={'/hi'} element={<Homepage/>}/>
        </Routes>
    </div>
  );
}

export default App;
