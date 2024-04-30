import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

       <Toaster> 
      <Header></Header>
      <Home />
      </Toaster>
   
    </div>
  );
}

export default App;
