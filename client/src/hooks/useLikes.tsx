export const useLikes = () => {
   const addLikes= (
      id: string,
      setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
      fetch('http://localhost:5000/like', {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
         },
         body: JSON.stringify({
            postId: id,
         }),
      })
         .then((res) => res.json())
         .then((result) => {
            console.log(result)
            setUpdatePost(true)
         })
   }
   return { addLikes }

}
