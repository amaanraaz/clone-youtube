import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>
        <Head />
        <Body />
      </h1>
    </div>
    </Provider>
  );
}

export default App;
