import Data from './Components/Data';
import Slider from './Components/Slider';
import logo from './main.jpg';

const App = () => {
  return (
    <div className="App">
        <img src={logo} className="main_logo" alt="logo" />
        <div className="content">
          <Data />
          <Slider />
        </div>
    </div>
  );
}

export default App;
