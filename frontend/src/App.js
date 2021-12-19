import './App.css';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Landing />
    </Fragment>
  );
}

export default App;
