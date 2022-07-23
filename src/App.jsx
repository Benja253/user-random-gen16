import { useState } from 'react'
import users from './json/users.json'
import CardUsers from './components/CardUsers'
import colors from './utils/colors'
import './prueba.css'

function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let userRandom = getRandomElement(users)
  let colorRandom = getRandomElement(colors)

  const [randomUser, setRandomUser] = useState(userRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    userRandom = getRandomElement(users)
    colorRandom = getRandomElement(colors)

    setRandomUser(userRandom)
    setRandomColors(colorRandom)
  }

  return (
    <div id='app' className="App" style={objStyle}>
      <CardUsers 
        randomUser={randomUser} 
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
