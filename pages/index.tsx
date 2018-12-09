import React from 'react';
import Layout from '../components/layout';

export default class Index extends React.Component {
  
  static async getInitialProps() {
    return {};
  }

  render() {
    return(<Layout>Index Page!</Layout>)
  }
}