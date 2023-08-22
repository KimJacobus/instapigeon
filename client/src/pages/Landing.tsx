import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mui/material'

//components
import { Box } from '@mui/system'
import BasicModal from '../components/BasicModal'
import {
   RickyPigeon,
   VeronicaPigeon,
   FreddyPigeon,
} from '../components/graphics/Pigeons'
import { Button } from '../components/button/Button'

//styles
import styles from './Landing.module.css'

export default function Landing() {
   // toggle modal on authed state

   const [showModal, setShowModal] = useState<boolean | null>(true)
   const navigate = useNavigate()
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')
   const isMobileScreen = useMediaQuery('(max-width: 600px)')
   return (
      <div className={styles.Landing}>
         {showModal ? (
            <BasicModal open={showModal} setOpen={setShowModal} />
         ) : (
            ' '
         )}

         <Box className={styles['box-landing']}>
            <div className={styles['header-landing']}>
               <h2>InstaPigeon</h2>

               <p>
                  Pigeons are often called the 'rats of the sky', but before we
                  dismiss them entirely, let's take a closer look at these
                  misunderstood birds. Despite their negative reputation,
                  pigeons are fascinating creatures with a rich history of
                  coexisting with humans in cities around the world.
               </p>

               <Button
                  buttonText="Sign me up!"
                  onClick={() => navigate('/register')}
                  backgroundColor="#BD9B45"
               />
            </div>
            <div className={styles['purple-bg']}>
               <div className={styles['illustration-wrap']}>
                  <div>
                     <RickyPigeon height={isMobileScreen ? 300 : 500} />
                     <p>
                        This is Ricky, raised on greasy pizza found in the trash
                        and monster energy mixed with starbucks coffee Don’t let
                        the scar over his eye fool you, he’s actually a really
                        nice pigeon even though he’s carrying a new strain of
                        bird covid
                     </p>
                  </div>

                  <div>
                     <VeronicaPigeon height={isMobileScreen ? 300 : 500} />

                     <p className={styles['veronica-text']}>
                        It's veronica! She likes to dance when she's not eating
                        dead rats in the streets, she's single and ready to
                        mingle! though I wouldn't, because she's not taken a
                        show, like ever.. in her life
                     </p>
                  </div>

                  <div>
                     <FreddyPigeon height={isMobileScreen ? 300 : 500} />

                     <p>
                        Freddy, really likes candy for some reason. You'd think
                        pigeons would just eat whatever they can find but Freddy
                        really has a sweet tooth! That's why he's always on a
                        permanent sugar rush!
                     </p>
                  </div>
               </div>
            </div>

            <div style={{ backgroundColor: '#7F96FF', height: '65vh' }}></div>

            <div className={isTabletScreen ? styles['purple-bg'] : ''} />

            {/* <div className={styles.footer} style={{ marginTop: '20px' }}> */}
            {/* <h2 className={styles.h2} style={{ textAlign: 'center' }}>
                  Where we're going we don't need no roads
               </h2> */}

            {/* <div
                  className={styles['footer-list']}
                  style={{
                     marginTop: '20px',
                     display: 'flex',
                     justifyContent: 'space-between',
                  }}
               >
                  <div className={styles['footer-left']}>
                     <ul>
                        <li>Product</li>
                        <li>Download</li>
                        <li>Albatros</li>
                        <li>Status</li>
                     </ul>

                     <ul>
                        <li>Resources</li>
                        <li>College</li>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Feedback</li>
                     </ul>
                  </div>

                  <div className={styles['footer-right']}>
                     <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Branding</li>
                     </ul>

                     <ul>
                        <li>Policies</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookie settings</li>
                        <li>Guidelines</li>
                     </ul>
                  </div>
               </div> */}
            {/* </div> */}
         </Box>
      </div>
   )
}
