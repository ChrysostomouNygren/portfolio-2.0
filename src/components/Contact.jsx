import React from 'react'

function Contact(props) {
  return (
    <a href={props.url} target="_blank">{props.name}</a>
    )
}

export default Contact