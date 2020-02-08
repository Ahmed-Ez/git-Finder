import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GitContext from '../../context/github/gitContext';

const Search = () => {
  const gitContext = useContext(GitContext);
  const { searchUsers, users, clearUsers } = gitContext;
  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Name Required !', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 ? (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      ) : null}
    </div>
  );
};



export default Search;
