import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/Album.css';

const Albums = ({ albums }) => {
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 300px 300px 300px' }}>
                {albums.map((album) => (
                    <div className='card' key={album.id} style={{ border: '2px solid green', padding: '3px 7px', }}>
                        <h2 className='album__number'>Album: {album.id}</h2>
                        <Link className='link__name' to={`/albums/${album.id}`}>
                            {album.title}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Albums