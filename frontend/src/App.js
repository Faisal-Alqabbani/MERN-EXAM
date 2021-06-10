import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import NewForm from "./Screens/NewForm";
import AllPets from "./Screens/AllPets";
import GetPet from "./Screens/GetPet";
import UpdatePet from "./Screens/UpdatePet";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={AllPets} exact />
        <Route path="/new" component={NewForm} exact />
        <Route path="/pet/:id" component={GetPet} exact />
        <Route path="/update/:id" component={UpdatePet} exact />
      </Container>
    </Router>
  );
}

export default App;
