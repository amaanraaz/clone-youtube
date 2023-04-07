import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Head from './components/Head';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <h1>
        <Head />
        <Body />
      </h1>
    </div>
  );
}

export default App;
