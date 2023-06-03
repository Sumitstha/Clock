import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(prop) {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#"><h2>{prop.title}</h2></a>
         
         
        </div>
      </nav>
    </div>
  )
}
