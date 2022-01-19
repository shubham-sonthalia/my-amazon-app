import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from "./Login.js";
import {useEffect} from 'react';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment.js";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders.js";

const promise = loadStripe(
  'pk_test_51KFG5eSBjSw1UXqU0bmIQ2IjKwPEAAtoNZDZBY8G2kbcmFRXZ6fMapBAM66AMVGQeRvhD3QarzzLEDjJejJqmQXt00QLEzsHLi'
);


function App() {
  //BEM method
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      // will only run once when the app component loads...
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);
        if(authUser){
          // the user just logged in / the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else{
          // the user is logged out.
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout></Checkout>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path = "/payment">
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path= "/orders">
            <Header />
            <Orders></Orders>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
