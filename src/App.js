import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';

import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';


function App() {
  return (
    <div className="App">

          <Router>
            <Provider store={store}>
              <Header/>
            </Provider>
              <Routes/>
            <Footer/>
          </Router>
    </div>
  );
}

export default App;
