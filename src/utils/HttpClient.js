import React from 'react'

const API = 'https://www.breakingbadapi.com'

export const HttpClient = (PATH) => {
  return (
    fetch(`${API}${PATH}`)
    .then((result) => result.json())
  )
}


