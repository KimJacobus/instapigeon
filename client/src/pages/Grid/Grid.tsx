import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect } from 'react'

import GridList from './GridList'

const Grid = () => {
   const [updatePost, setUpdatePost] = useState<boolean>(false)
   const [data, setData] = useState<[]>([])
   const [error, setError] = useState<boolean>(false)
   const [isPending, setIsPending] = useState<boolean>(false)

   useEffect(() => {
      console.log('fetch recalled!');
      
      fetch('http://localhost:5000/allpost')
         .then((res) => res.json())
         .then((data) => {
            setData(data)
            setUpdatePost(false)
         })
         .catch((err) => {
            setError(err)
            setIsPending(true)
         })
   }, [updatePost])

   return (
      <div className="home">
         {error && <p className="error">{error}</p>}
         {isPending && <p className="loading">Loading...</p>}
         {data && <GridList data={data} setUpdatePost={setUpdatePost} />}
      </div>
   )
}

export default Grid
