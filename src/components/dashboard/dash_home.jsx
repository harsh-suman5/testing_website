import React from 'react'
import Dash_navbar from './dash_navbar'

const Dash_home = () => {
    const username = localStorage.getItem('username')
    return (
        <>
            <Dash_navbar />
            <div>
                <h1>hello {username}</h1>
      </div>

    </>
  )
}

export default Dash_home