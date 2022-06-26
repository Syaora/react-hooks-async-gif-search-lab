import React, { useState } from "react"

function GifSearch({ handleSearchResult }){
  const [search, setSearch] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    handleSearchResult(search)
    setSearch("")
  }

  function handleSearch(event){
    setSearch(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleSearch} value={search} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default GifSearch