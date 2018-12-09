import * as React from 'react';
import Header from './header';
import withRoot from '../lib/material-ui/withRoot';

export default withRoot(({children}) => (
  <>
    <Header />
    {children}
  </>
));