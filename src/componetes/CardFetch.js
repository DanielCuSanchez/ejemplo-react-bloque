import React from 'react'

export const CardFecth = ({ name, status, species, gender }) => {
  return (
    <>
      <h2>Nombre {name}</h2>
      <p>Status {status}</p>
      <div>Species {species}</div>
      <div>Gender {gender}</div>
    </>
  )
}

