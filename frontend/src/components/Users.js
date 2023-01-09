import React from 'react'
import CreatorList from "./UserList"
import { useHistory } from 'react-router-dom';

const Creators = ({ handleCreatorNameChange }) => {
  const history = useHistory();

  function handleClick(username) {
    const creatorName = handleCreatorNameChange(username);
    history.push(`/userpage?username=${creatorName}`);
  }

  return (
    <CreatorList handleCreatorNameChange={handleClick} />
  )
}

export default Creators;