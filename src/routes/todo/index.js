import React from 'react';
import Layout from '../../components/Layout';

const title = 'Todo';

export default {

  path: '/todo',

  action() {
    return {
      title,
      component: <Layout>under constraction</Layout>,
    };
  },

};
