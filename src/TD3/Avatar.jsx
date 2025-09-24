import React from 'react'

const Avatar = ({filePath}) => {
  return (
    <img className='logo' src={filePath} alt="Image de profil" />
  )
}

export default Avatar