import * as React from 'react';
import Head from 'next/head';

type HeadProps = {
  title: string
}

export default (props: HeadProps) => {
  return (<Head>
    <title>{props.title}</title>
  </Head>);
}