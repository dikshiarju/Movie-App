import React from 'react'

const GenreFilter = ({genreList,setSelectedGenre}) => {
  return (
    <select className='p-2 bg-gray-900 opacity-60 backdrop-blur-md text-white border rounded mb-4'
    onChange={(e)=>setSelectedGenre(e.target.value)}>
      <option value="">All Genres</option>
       {genreList.map((genre,index)=>{
        return(
          <option key={genre.id || `${genre.name}-${index}`} value={genre.id}>{genre.name}</option>
        )
       })}
    </select>
  )
}

export default GenreFilter