import "./App.css";
import Shop from "./components/Shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import QnA from "./components/QnA/QnA";

function App() {
  return (
    <div className="app-body">
      <Header></Header>
      <Shop></Shop>
      <QnA></QnA>
    </div>
  );
}

export default App;
