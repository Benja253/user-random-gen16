import React from 'react'

const CardUsers = ({randomUser, randomColors, getRandomAll}) => {

  console.log(randomColors)

  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <header>
        <img className='card__img' src={randomUser.picture.large} alt="" />
      </header>
      <div className='card__container'>
        <i className="fa-solid fa-quote-left quotes-icon"></i>
        <h2 id='h2' className='card__name'>{`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}</h2>
        <p className='card__item'><b>Gender: </b>{randomUser.gender}</p>
        <p className='card__item'><b>email: </b>{randomUser.email}</p>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
      </div>
    </article>
  )
}

export default CardUsers