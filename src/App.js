import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import {Route ,Link , Routes} from 'react-router-dom';


function App() {
  return (
    <div  className="App">

     
      <NavBar /> 
      <Header/> 
      <Routes>
         <Route path='/signup' element={ <SignUp/>}/> 
         <Route  path='/login' element={<Login/>}/> 
         
      </Routes>
      <Footer/>
    </div>
    

    
  );
}

export default App;
