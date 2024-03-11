import Header from "./component/layout/Header";
import Card from "./component/layout/Card";
import {productsArr} from "./component/utility/DummyData"
import Context from "./component/Store/Context";


function App() {
  return (
    <Context>
      <Header />
      <Card data={productsArr}/>
    </Context>
  );
}

export default App;
