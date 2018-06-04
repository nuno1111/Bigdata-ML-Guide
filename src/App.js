import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import jQuery from 'jquery/src/jquery';

import {
  Navigator,
  Home,
  ML,
  MD
} from './components';

import ReactDisqusComments from 'react-disqus-comments';

var $ = jQuery;

class App extends Component {

  componentDidMount(){
    this.init()
  }

  init(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#wrapper").toggleClass("toggled");
  }

  render() {
    return (
      <div id="wrapper">
          <Navigator/>

          <div id="page-content-wrapper">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/ML' component={ML}/>
                <Route path='/ML/MD/:md_url' component={MD}/>
              </Switch>

              <ReactDisqusComments
                shortname="nuno1111-github-io"
                url="https://nuno1111-github-io.disqus.com/embed.js"
              />
          </div>
      </div>

    );
  }
}

export default App;
