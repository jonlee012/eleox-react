//pages
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

//styles
import {StyledContainer} from './styles/Styles';

//route
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <StyledContainer>
          <Switch>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </StyledContainer>
      </Router>
  );
}

export default App;
