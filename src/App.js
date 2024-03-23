import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Rowposts from './components/rows/rowposts';
import { originals,action } from './components/urls/urls';


function App() {
  return (
  <>
  <Navbar/>
  <Banner/>
  <Rowposts genre="Trending" url={originals}/>
  <Rowposts genre="Action" isSmall url={action}/>
 
  </>
  );
}

export default App;
