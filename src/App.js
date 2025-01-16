import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Divider } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Categories />
      <Dashboard />
      <Divider />
      <Dashboard />
    </div>
  );
}

export default App;
