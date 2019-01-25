import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Connection from './Pages/Connection';
import TableItems from './Pages/TableItem';
import Tables from './Pages/Tables';

import GlobalStyles from './globalStyles';

export default class Routes extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyles />
          <Route exact={true} path="/" component={Connection} />
          <Route exact={true} path="/tables" component={Tables} />
          <Route exact={true} path="/tableitems" component={TableItems} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
