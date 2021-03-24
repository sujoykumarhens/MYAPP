import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Signin from './components/signin';
import Dashboard from './components/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Signin' component={Signin}/>
      <Route path='/Dashboard' component={Dashboard}/>  
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
