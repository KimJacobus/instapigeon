//hooks
import { useLikes } from '../../hooks/useLikes'
import { useFollow } from '../../hooks/useFollow'

import { Button } from '../button/Button'
import Comments from '@mui/icons-material/MapsUgcRounded'
import Likes from '@mui/icons-material/FavoriteBorderSharp'

import styles from './Cardbar.module.css'

interface ICardbarProps {
   post: any
   setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
}

const Cardbar = ({ post, setUpdatePost }: ICardbarProps) => {
   const { addLikes } = useLikes()
   const { followUser } = useFollow()

   return (
      <div className={styles['card-wrapper']}>
         <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
               onClick={() => followUser(post.postedBy._id, setUpdatePost)}
               buttonText="follow"
               size="small"
               backgroundColor="transparent"
               disableElevation
            />
         </div>
         <div className={styles.icons}>
            <p
               style={{
                  margin: 0,
                  padding: 0,
               }}
            >
               {post.likes.length}
            </p>
            <Likes
               className={styles.likes}
               onClick={() => addLikes(post._id, setUpdatePost)}
            />
            <Comments />
         </div>
      </div>
   )
}

export default Cardbar
