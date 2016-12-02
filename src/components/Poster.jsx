import React from 'react';

const Poster = (props) => {
  console.log(props)
  return props.movie ? <img src={props.movie.Poster} />
    : <div>No movie...</div>

  // if (props.movie) {
  //   return (
  //     <img src={props.movie.Poster} />
  //   )
  // } else {
  //   return <div>No movie...</div>
  // }
}

export default Poster;
