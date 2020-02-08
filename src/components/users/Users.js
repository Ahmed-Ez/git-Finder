import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import GitContext from '../../context/github/gitContext';

const Users = () => {
  const gitContext = useContext(GitContext);
  const { getData, loading, users } = gitContext;

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;
