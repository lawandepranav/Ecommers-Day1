import Navbar from './Components/Navbar';
import Pages from './Components/Pages/Pages';

function App() {
  return (
    <div className="App">
      <Navbar styled={{position:"fixed", overFlow:"hidden"}}/>
      <Pages />
    </div>
  );
}

export default App;