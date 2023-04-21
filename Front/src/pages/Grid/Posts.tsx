import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cardbar from '../../components/cardbar/Cardbar'

import { Box } from '@mui/system'
//components
import { usePostComment } from '../../hooks/usePostComment'
//styles
import styles from './Posts.module.css'
import { useDeleteComment } from '../../hooks/useDeleteComment'

type postProps = {
   setPostModal: React.Dispatch<React.SetStateAction<boolean>>
   setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
   post: any
}

// put stylings in module

const Posts = ({ setPostModal, setUpdatePost, post }: postProps) => {
   const [localUpdate, setLocalUpdate] = useState<boolean>(false)
   const { addComment, comments, setComments, error, isPending } =
      usePostComment()


      console.log(post.comments[0]._id);
      console.log(comments);
      
      
   const { deleteData } = useDeleteComment('http://localhost:5000/deletepost/:postId')


   useEffect(() => {
      const getText = post.comments.map((item: any) => item.text)
      setComments(getText)
   }, [post, localUpdate])

 

   const submitHandler = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault()

      const inputElement = e.currentTarget[0] as HTMLInputElement
      const commentText = inputElement.value

      if (commentText === '') {
         console.log('empty comment')
      } else {
         const postObject = {
            text: commentText,
            id,
         }
         addComment(postObject)
         setUpdatePost(true)
         setLocalUpdate(true)
         inputElement.value = ''
         setLocalUpdate(false)
      }
   }

   const clickHandler = () => {
      setPostModal(false)
      // true launches modal
      // if (postModal) {
      //    document.body.style.overflow = 'scroll'
      // }
   }
   const handleDelete = (post:any) => {
         console.log(post._id);
         deleteData(post._id)         
   }

   return (
      <>
         <Box
            sx={{
               zIndex: 1,
               position: 'absolute',
               width: '100%',
            }}
         >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div className={styles.singleCard}>
                  <div style={{ textDecoration: 'none', color: 'black' }}>
                     <div>
                        <img src={post.photo} />
                        {comments.map((comment: any) => (
                           <p key={post.comments._id} onClick={() => handleDelete(post)}>{comment}</p>
                           
                        ))}
                     </div>
                  </div>
               </div>
               <div
                  className="background-modal"
                  style={{
                     zIndex: -1,
                     position: 'absolute',
                     backgroundColor: '#D9D9D9',
                     height: '200%',
                     width: '100%',
                     margin: 0,
                  }}
               ></div>
            </div>
            <div className={styles.cardbar}>
               {/* can't use the same cardbar in two different places */}
               {/* <Cardbar /> */}
            </div>
            <form onSubmit={(e) => submitHandler(e, post._id)}>
               <input type="text" placeholder="add a comment"></input>
               <button>comment</button>
            </form>
            <button onClick={clickHandler}>go back</button>
         </Box>
      </>
   )
}
export default Posts
