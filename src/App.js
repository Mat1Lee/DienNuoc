import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { createBrowserHistory } from "history";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Fragment } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import HomeTemplate from "./tempalte/HomeTemplate";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Setting from "./components/setting/Setting";
import "./style/dark.scss";
import UserTemplate from "./tempalte/UserTemplate";
import Registor from "./pages/register/Registor";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from 'firebase/compat/app';
export const history = createBrowserHistory();



function App() {
  const dispatch = useDispatch();
// useEffect(()=>{
//   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
//     if (!user) {
//       // user logs out, handle something here
//       console.log('User is not logged in');
//       return;
//     }

//     // Get me when signed in
//     // const action = getMe();
//     try {
//       const actionResult = await dispatch(getMe());
//       const currentUser = unwrapResult(actionResult);
//       console.log('Logged in user: ', currentUser);
      
     
//     } catch (error) {
//       console.log('Failed to login ', error.message);
//       // show toast error
//     }
//   });

//   return () => unregisterAuthObserver();

// },[])

  return (
  
        <Router history={history}>
          <Switch>
            <HomeTemplate exact path='/home' component={Home} />
            
            <Route exact path="/" render={(propsRoute) => {
              return <Fragment>

                <Home {...propsRoute} />
                
              </Fragment>
            }} />

            {/* <UserTemplate path='/login' exact component={Login} /> */}

            <UserTemplate exact path='/login' component={Login} />
            <UserTemplate exact path='/registor' component={Registor} />
              <HomeTemplate exact path='/setting' component={Setting}></HomeTemplate>

            <HomeTemplate exact path='/home' component={Home}/>
          </Switch>
        </Router>
     


  );
}

export default App;
