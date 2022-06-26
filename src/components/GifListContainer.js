import GifList from "./GifList"
import GifSearch from "./GifSearch"
import React, { useEffect, useState } from "react"

require('dotenv').config()

function GifListContainer(){
  const [gifList, setGifList] = useState([])

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${env.process.API_KEY}&rating=g`)
      .then((res) => res.json())
      .then((data) => onGifList(data.data))
  }, [])

  function onGifList(list){
    const newList = list.slice(0, 3)
    setGifList((gifList) => newList)
  }

  function handleSearchResult(search){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${env.process.API_KEY}&rating=g`)
      .then((res) => res.json())
      .then((data) => onGifList(data.data))
  }

  return (
    <>
      <GifList gifList={gifList} />
      <GifSearch handleSearchResult={handleSearchResult}/>
    </>
  )
}

export default GifListContainer