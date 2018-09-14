import React from 'react';
import NewsListTable from './NewsListTable';
import { Route } from 'react-router-dom';

const FrontPage = () => (
  <div>
    <Route exact path ="/" component = {NewsListTable} />
  </div>
  );

  export default FrontPage;