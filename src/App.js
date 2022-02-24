import Navigation from "./components/Nav/Nav";
import Footer from './components/footer/Footer'
import Routing from "./components/Routing/App-Routing";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navigation />
      <Routing />
      <Footer/>
    </div>
  );
}

export default App;
