import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<HomeScreen />} />
        <Route path='/signup' element={<SignUpScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
