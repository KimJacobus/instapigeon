export const useFollow = () => {
   const followUser = (
      userid: string,
      setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
      fetch('http://localhost:5000/follow', {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
         },
         body: JSON.stringify({
            followId: userid,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            setUpdatePost(true)
         })
   }
   return { followUser }
}

