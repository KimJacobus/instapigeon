import { useState } from 'react'
import Posts from './Posts'

// styles
import styles from './GridList.module.css'
import Cardbar from '../../components/cardbar/Cardbar'

import { useMediaQuery } from '@mui/material'

type GridListProps = {
   data: any
   setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
}

const GridList = ({ data, setUpdatePost }: GridListProps) => {
   const [postModal, setPostModal] = useState<boolean>(false)
   const [post, setPost] = useState<object>({})
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')

   const clickHandler = (post: object) => {
      // pass post data

      setPostModal(true)
      setPost(post)
      // if (!postModal) {
      //    document.body.style.overflow = 'hidden'
      // }
   }

   const posts = data.posts

   return (
      <div className={styles.bg}>
         <div className={styles.box}>
            {postModal ? (
               <Posts
                  setPostModal={setPostModal}
                  setUpdatePost={setUpdatePost}
                  post={post}
               />
            ) : (
               ' '
            )}
            {posts &&
               posts.map((post: any) => (
                  <div key={post._id}>
                     <div className={styles.card}>
                        <div
                           onClick={() => clickHandler(post)}
                           style={{
                              textDecoration: 'none',
                              color: 'black',
                           }}
                        >
                           <div className={styles['img-wrapper']}>
                              <img src={post.photo} />
                           </div>
                           {/* <div>
                                 <p>{post.likes.length}</p>
                              </div> */}
                        </div>
                     </div>
                     {isTabletScreen ? (
                        ''
                     ) : (
                        <Cardbar post={post} setUpdatePost={setUpdatePost} />
                     )}
                  </div>
               ))}
         </div>
      </div>
   )
}

export default GridList
