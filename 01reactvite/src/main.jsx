import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherUser =  "create new user"

const anotherElement = (
  <a href='https://google.com' target='_blank'>Another link</a>
)
const reactElement = React.createElement(
  'a',
  {
    href: 'http://google.com',
    target: '_blank',
  },
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // anotherElement
    reactElement
    // <App/>

)
