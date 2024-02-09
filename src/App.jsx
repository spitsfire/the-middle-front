import { Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <div id='container' className='text-gray-600'>
      <Header />
      <Routes>
        <Route path='/' element={<Jumbotron />} />
        <Route path='/midpoint' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
