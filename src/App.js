//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Timers from './components/Timers';

function App() {
  return (
 
    <>
  
    <Navbar title="Digital Clock" />
    <div className="container my=3">
    <Timers heading="Time Check"/>
    </div>
    
       </>  
  );
}

export default App;
