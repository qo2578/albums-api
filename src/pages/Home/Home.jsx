import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './../../css/Album.css';

const Home = ({setAlbums}) => {
  const getAlbums =() => {
    axios('https://jsonplaceholder.typicode.com/albums')
    .then(({ data }) => setAlbums(data))
  }
  return (
    <div className='button'>
   
        <Link className='link' to='/albums' onClick={getAlbums}>Get Albums</Link>
     
    </div>
  )
}

export default Home