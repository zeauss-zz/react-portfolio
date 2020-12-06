import GlobalStyle from "./components/global-style/global-style.component";
import Nav from "./components/nav/nav.component";
import AboutUs from "./pages/about-us/about-us.component";
import ContactUs from "./pages/contact-us/contact-us.component";
import OurWork from "./pages/our-work/our-work.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route exact path="/"  component={AboutUs} />
        <Route exact path="/work"  component={OurWork} />
        <Route path="/contact"  component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
