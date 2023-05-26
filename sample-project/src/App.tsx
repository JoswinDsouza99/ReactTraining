import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Message from "./Component/Message";
import Footer from "./Component/Footer";
import ListGroup from "./Component/BootTrial";
import StateManagement from "./Component/StateManagement";
import List from "./Component/List";

function App() {
  let items = ["Kolkata", "Budapest", "London", "Brazil", "Rio"];
  return (
    <div>
      <Header />
      <div>
        <span>
          <List heading="The citys I want to Visit" items={items} />
          <Content />
        </span>
      </div>
      <div>
        <Footer />
        <Message text="Hellow My First React Props"></Message>
      </div>
    </div>
  );
}

export default App;
