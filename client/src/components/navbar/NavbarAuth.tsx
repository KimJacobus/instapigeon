import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { useMediaQuery } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

import { Button } from '../button/Button'

import { useLocation, useNavigate } from 'react-router-dom'
import { BurgerMenu } from './BurgerMenu'

import styles from './NavbarAuth.module.css'

export default function NavbarAuth() {
   const authed = ['/']
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)

   const isTabletScreen = useMediaQuery('(max-width: 1024px)')

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const navigateToLogin = () => {
      navigate('/login')
   }

   return (
      <>
         <AppBar position="relative" elevation={0} sx={{ margin: '0' }}>
            <Toolbar className={styles.toolbar}>
               <Link underline="none" component={RouterLink} to="/grid">
                  <h2>InstaPigeon</h2>
               </Link>
               <div>
                  {isTabletScreen ? (
                     <BurgerMenu
                        handleClick={handleClick}
                        handleClose={handleClose}
                        pathname={pathname}
                        open={open}
                        anchorEl={anchorEl}
                        color="secondary"
                     />
                  ) : (
                     <ul className={styles['desktop-links']}>
                        <span>
                           <Link underline="none" component={RouterLink} to="/">
                              <li>Home</li>
                           </Link>
                           <Link underline="none" component={RouterLink} to="/">
                              <li>Profile</li>
                           </Link>
                        </span>
                        <RouterLink to="/create">
                           <Button
                              buttonText="create post"
                              backgroundColor="#BD9B45"
                              color="primary"
                              disableElevation={true}
                           ></Button>
                        </RouterLink>
                     </ul>
                  )}
               </div>
            </Toolbar>
         </AppBar>
      </>
   )
}
