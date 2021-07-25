import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import { LeftPane } from './components';
import { RightPane } from './components';
import './App.scss';


function App() {
    return(
        <Router>
           <div className="app">
              <LeftPane />

              <Switch>
                  <Route path="/" exact>Home</Route>
                  <Route path="/explore">Explore</Route>
                  <Route path="/notifications">Notifcations</Route>
                  <Route path="/messages">Messages</Route>
                  <Route path="/bookmarks">Bookmarks</Route>
                  <Route path="/lists">Lists</Route>
                  <Route path="/profile">Profile</Route>      
              </Switch>
              
                <RightPane />
           </div>
        </Router>
        
    )
}

export default App;