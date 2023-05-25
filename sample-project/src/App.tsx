import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Message from "./Component/Message";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Header/>
      <div>
      <span>
        <Menu/>
        <Content/>
      </span>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
