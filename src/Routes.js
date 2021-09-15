import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import About from "./components/About.js";
import ThankYou from "./components/ThankYou.js";




const Routes = () => {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default Routes;