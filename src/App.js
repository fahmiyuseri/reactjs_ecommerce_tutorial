import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>amazonn</Link>
        </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen />}></Route>
            <Route path='/' element={<HomeScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
