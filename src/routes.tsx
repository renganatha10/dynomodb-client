import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Connection from './Pages/Connection';
import Databases from './Pages/Databases';

import GlobalStyles from './globalStyles';

export default class Routes extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyles />
          <Route exact={true} path="/" component={Connection} />
          <Route exact={true} path="/database" component={Databases} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
