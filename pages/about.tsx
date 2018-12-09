import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

export default class Index extends React.Component {
  
  static async getInitialProps() {
    return {};
  }

  render() {
    return(<Layout>
      About Page!
      <Link href="/">index</Link>
    </Layout>)
  }
}