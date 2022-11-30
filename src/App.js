import Header from './components/Header'
import Footer from './components/Footer'
import Feed from './components/Feed'
// import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <main className="App">
     
       <Header/>

        {/* <Home/> */}

        <Feed/>

       <Footer/>
      
    </main>
  );
}

export default App;
