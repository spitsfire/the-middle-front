import Form from "./components/form/Form";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <div id='container' className='text-gray-600'>
      <Header />
      <main className='mt-28'>
        {/* <Jumbotron /> */}
        <Form />
      </main>
    </div>
  );
}

export default App;
