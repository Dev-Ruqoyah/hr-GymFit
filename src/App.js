import './index.css'
import Homecontent from './component/Home';
import Navbar from './component/navbar';

const Home = () => {
  return ( 
    <div className="homw">
      <Navbar/>
      <Homecontent/>
    </div>
   );
}
 
export default Home;