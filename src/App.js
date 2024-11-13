// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>

    {/* <Navbar/> */}
    <Navbar title="TextUtils" aboutText='About'/>
    <div className="container my-3">
    <Textform heading="Enter The text to analyze below"/>

    </div>
    </>
  );
}

export default App;
