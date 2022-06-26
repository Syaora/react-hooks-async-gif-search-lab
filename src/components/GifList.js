function GifList({ gifList }){
  return (
    <ul>
      {gifList.map((gif) => {
       return <li key={gif.id}><img src={gif.images.original.url} alt="" /></li>
      })}
    </ul>
  )
}

export default GifList