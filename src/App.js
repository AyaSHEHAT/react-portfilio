import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      

      <NavBar />
      <Header/>
      <SignUp/>
      <Login/>
      <Footer/>
     
    </div>
    

    
  );
}

export default App;
