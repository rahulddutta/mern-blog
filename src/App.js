import Topbar from "./components/Topbar/Topbar";
import { Home } from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/SinglePost/SinglePost";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
