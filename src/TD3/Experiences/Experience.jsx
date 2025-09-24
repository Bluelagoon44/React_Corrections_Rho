import React from 'react'

const Experience = ({startYear, endYear, intitule}) => {
  return (
    <div>{startYear + "-" + endYear + " : " + intitule}</div>
  )
}

export default Experience