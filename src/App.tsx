import './App.scss';
import Content from './component/Contant/Content';
import Footer from './component/Footer/footer';
import Header from './component/Header/Header';
import { Router } from './Router';
function App() {
  return (
    <div className='div1'>
      <Header/>
      <Router/> 
      <Footer/>  
    </div>
  );
}

export default App;
