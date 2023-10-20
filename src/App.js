// import Counter from "./components/Counter";
import {Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import {Home} from "./pages/Home";
import {Contact} from './pages/Contact';
import {CounterPage} from './pages/CounterPage';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/Contact" element = {<Contact/>}></Route>
          <Route path="/CounterPage" element = {<CounterPage/>}></Route>
          <Route path="/*" element = {<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
