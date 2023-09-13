import React from 'react';
import {Outlet} from 'react-router-dom';
import Layout from './components/Common/Layout/Layout';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
