import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Message from "./Component/Message";
import Footer from "./Component/Footer";
import ListGroup from "./Component/BootTrial";
import StateManagement from "./Component/StateManagement";
import List from "./Component/List";

function App() {
  return (
    <div>
      <Header />
      <div>
        <span>
          <List />
          <Content />
        </span>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
