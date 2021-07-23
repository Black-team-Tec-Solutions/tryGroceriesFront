import { Component } from 'react';
import './App.css';
import NavBar from './app/components/NavBar';
import SubMenu from './app/components/SubMenu';
import Routes from './Routes';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render (){
    let { pathname } = this.props.location
   
    if (pathname === "/main") {
      return (    
        <div className="App">
          {/*<NavBar/>*/}
    
              {/*<SubMenu/>*/}
              <Routes/>

        </div>
      )
    } else {
      return (
        <div className="App">
          <Routes/>
        </div>
      )
    }

  }
}

const appWithRouter = withRouter(App)
export default appWithRouter;