import React from 'react'
import CreatorList from "./CreatorList"

const Creators = ({ handleCreatorNameChange }) => {
  return (
    <CreatorList handleCreatorNameChange={handleCreatorNameChange} />
  )
}

export default Creators