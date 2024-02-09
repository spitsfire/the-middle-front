import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Header from "./components/shared/Header";
import Jumbotron from "./pages/Jumbotron";
import "./App.css";
import Results from "./pages/Results";

function App() {
  return (
    <div id='container' className='text-gray-600'>
      <Header />
      <Routes>
        <Route path='/' element={<Jumbotron />} />
        <Route path='/midpoint' element={<Form />} />
        <Route path='/itinerary' element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
