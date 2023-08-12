import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './../../css/Album.css';

const AlbumDescription = ({ }) => {
  const { albumId } = useParams()
  const [albumItems, setAlbumItems] = useState([])
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then(({ data }) => setAlbumItems(data))

  }, [])

  return (
    <div>
      <h3 className='album__number'>Album: {albumId}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
        {albumItems.map(el => (
          <img className='img' src={el.url} alt="" width='300px' key={el.id} />
        ))}
      </div>
    </div>
  )
}

export default AlbumDescription