import React from 'react'
import { Sidebar } from './Sidebar'
import user from '../images/user.png'
import { Header } from './Header'
import { Add } from './Add'
import { Post } from './Post'
import {Map} from './Map'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Notification } from './Notification'
import { Detail } from './Detail'

export const Home = () => {
  return (
    <Router>
    <div>
      <div className=" row bg-light" style={{height:'100vh'}}>
        <div className="col-4 col-lg-2 m-0" style={{height:'100%',backgroundColor:'#483D8B'}}>
          <Sidebar/>
          </div>
        <div className="p-0 col-8 col-lg-10 bg-light">
          {/* <Header/> */}
          <Switch>
            <Route exact path="/" component={Post}/>
            <Route exact path="/Add" component={Add}/>
            <Route  path="/Data" component={Post}/>
            <Route path="/Notify" component={Notification}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/Map" component={Map}/>
          </Switch>
 
        </div>
      </div>
    </div>
    </Router>
  )
}
