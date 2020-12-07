import GlobalStyle from "./components/global-style/global-style.component";
import Nav from "./components/nav/nav.component";
import AboutUs from "./pages/about-us/about-us.component";
import ContactUs from "./pages/contact-us/contact-us.component";
import OurWork from "./pages/our-work/our-work.component";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/movie-detail/movie-detail.component";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route exact path="/work/:id" component={MovieDetail} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
