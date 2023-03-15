import "./App.css";
import { Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Route exact path="/">
          <Hero />
          <Skills />
          <Profile />
          <Project />
          <Footer />
        </Route>
        <Route exact path="/iletisimform" component={Form} />
      </div>
    </div>
  );
}

export default App;
