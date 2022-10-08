import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import LandingPage from './Components/LandingPage.jsx/LandingPage';
import ResNavList from './Components/RespNavList/ResNavList';
import { useState } from 'react';

function App() {
  const [resListView, setresListView] = useState(false)
  return (
    <div style={{maxWidth:'100vw',overflowX:'hidden'}} >
      <Nav setresListView={setresListView} resListView={resListView} />
      <div style={{display:`${resListView ? "" : "none"}`}} >
        <ResNavList />
      </div>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
