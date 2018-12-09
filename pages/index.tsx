import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

export default class Index extends React.Component {
  
  static async getInitialProps() {
    return {};
  }

  render() {
    return(<Layout>
      Index Page!
      <Link href="/about">about</Link>
    </Layout>)
  }
}