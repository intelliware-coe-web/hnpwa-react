import React from 'react';
import UserProfileContainer from './UserProfileContainer';
import { Route } from 'react-router-dom';

const UserProfilePage = () => (
  <div>
    <Route exact path ="/UserProfile" component = {UserProfileContainer} />
  </div>
  );

  export default UserProfilePage;