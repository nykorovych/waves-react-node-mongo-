// import React from "react";
// import axios from "axios";
// import "./App.css";

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('/api/product/brands').then(res => console.log(res))
//   }
//   render() {
//     return <div className="App">NOPE COCK</div>;
//   }
// }

// export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import Layout from './hoc/layout';
// import Auth from './hoc/auth';

// import RegisterLogin from './components/Register_login';
// import Register from './components/Register_login/register';

// import UserDashboard from './components/User';

const Routes = () => {
  return(
    <Layout>
      <Switch>
        {/* <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>

        <Route path="/register" exact component={Auth(Register,false)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/> */}
        <Route path="/" exact component={Home}/>
      </Switch>
     </Layout>

  )
}

export default Routes;

