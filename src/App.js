import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resum from "./pages/Resum";
import Services from "./pages/Services";
import Work from "./pages/Work";

class App extends React.Component {
  state = {
    loading: false,
    repos: [],
  };
  getRepos = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/osamamatar/repos?sort=dsc&client_id=99e83e4865c4353352bd&client_secert=42864f8c5e5f357f7d2edc9597d5f5a003feebfa`
    );
    this.setState({ repos: res.data, loading: false });
  };
  render() {
    return (
      <div className='container'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/Work'
              render={(props) => (
                <Work
                  {...props}
                  getRepos={this.getRepos}
                  repos={this.state.repos}
                  loading={this.state.loading}
                />
              )}
            />
            <Route exact path='/Services' component={Services} />
            <Route exact path='/Resume' component={Resum} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
