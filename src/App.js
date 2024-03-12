import Header from "./component/layout/Header";
import Store from "./component/layout/Store";
import { productsArr } from "./component/utility/DummyData";
import Context from "./component/Store/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 


import Home from "./component/layout/Home";
import About from "./component/layout/About";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/' element ={<Store data={productsArr}/>}/>
          </Routes>
        </div>
      </Context>
    </BrowserRouter>
  );
}

export default App;
