
import './App.css';
import Banner from './components/Banner';
import Footer  from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <p>Hello</p>
      <Footer/>
    </>
  );
}

export default App;
