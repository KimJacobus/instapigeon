import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { motion } from 'framer-motion'

import styles from './BasicModal.module.css'

const modalVariants = {
   hidden: {
      y: 1000,
      x: 0,
   },
   visible: {
      x: 0,
      y: 0,

      transition: {
         delay: 0.5,
      },
   },
}

interface IbasicModalProps {
   open: boolean
   setOpen: (a: boolean) => void
}

export default function BasicModal({ open, setOpen }: IbasicModalProps) {
   const handleClose = () => setOpen(false)

   return (
      <div>
         <Modal open={open} onClose={handleClose}>
            <motion.div
               className={styles['basic-modal']}
               variants={modalVariants}
               initial="hidden"
               animate="visible"
            >
               <Typography sx={{ mt: 2 }}>
                  Cookies are great and so are you!
               </Typography>

               <button onClick={handleClose}>I Agree</button>
            </motion.div>
         </Modal>
      </div>
   )
}
