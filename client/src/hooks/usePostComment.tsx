import { useState } from 'react'

export const usePostComment = () => {
   const [error, setError] = useState<string | null>(null)
   const [isPending, setIsPending] = useState<boolean>(false)
   const [comments, setComments] = useState<string[]>([])

   const addComment = async (postObject: { text: string; id: string }) => {
      setIsPending(true)
      try {
         const response = await fetch('http://localhost:5000/comment', {
            method: 'put',
            headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
               postId: postObject.id,
               text: postObject.text,
            }),
         })
         const comment = await response.json()
         console.log(comment.text)

         setComments((comments) => [...comments, comment.text])
      } catch (err: any) {
         setError(err.message)
      } finally {
         setIsPending(false)
      }
   }

   return { addComment, comments, setComments, error, isPending }
}

