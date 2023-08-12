import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "../../pages/Home";
import Albums from "../../pages/Albums";
import AlbumDescription from "../../pages/AlbumDescription";


const App = () => {
    const [albums, setAlbums] = useState([])





    return (
       
            <Routes>
                <Route path='/' element={<Home setAlbums={setAlbums}/>} />
                <Route path='/albums' element={<Albums albums={albums}/>}/>
                <Route path='/albums/:albumId' element={<AlbumDescription/>}/>
            </Routes>
          
       
    )
}

export default App