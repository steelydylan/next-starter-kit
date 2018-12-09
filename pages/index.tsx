import * as React from 'react';
import Layout from '../components/layout';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default class Index extends React.Component {
  
  static async getInitialProps() {
    return {};
  }

  render() {
    return(<Layout>
      Index Page!
      <Link href="/about"><Button variant="outlined">about</Button></Link>
    </Layout>)
  }
}