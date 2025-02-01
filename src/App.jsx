import './App.css';
import { inventoryData } from './data/data';
import Shop from './components/Shop/Shop';

const App = () => {

  return (
 <Shop inventoryData = {inventoryData}/>
  );
};

export default App;
