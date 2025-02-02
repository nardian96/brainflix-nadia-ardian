import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';
import Upload from './Upload';
import Header from './components/Header'
import LogoHeader from './assets/logo/Logo-brainflix.svg'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    < Header logo={LogoHeader} />
    <Switch>
      <Route path="/" exact component={Video}/>
      <Route path="/video" exact component={Video}/>
      <Route path="/video/:id" render={(routerProps) => <Video {...routerProps} />}/>
      <Route path="/upload" component={Upload}/>
    </Switch>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

