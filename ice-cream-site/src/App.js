import './App.css';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Nav />
      <Cards />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;