import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
        <div>
            <ul>
                <li><Link to="/">Front Page</Link></li>
                <li><Link to="/UserProfile">User Profile</Link></li>
            </ul>
        </div>
  );

  export default Navigation;