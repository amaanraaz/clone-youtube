import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Container from './components/Container';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children:[
      {
        path:'/',
        element:<Container />
      },
      {
        path:'/watch',
        element: <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>
        <Head />
        <RouterProvider router={appRouter} />
      </h1>
    </div>
    </Provider>
  );
}

export default App;
