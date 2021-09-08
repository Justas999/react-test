import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import JonyBetPage from './pages/JonyBetPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage}></Route>
        <Route path='/logout' component={JonyBetPage}></Route>
        <Route path='/admin' component={AdminPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
