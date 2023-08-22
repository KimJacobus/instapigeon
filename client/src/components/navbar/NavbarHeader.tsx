import * as React from 'react'
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom'

//mui
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { BurgerMenu } from './BurgerMenu'
import { useMediaQuery } from '@mui/material'
import { Link } from '@mui/material'

import { Button } from '../button/Button'

//styles
import styles from './NavbarHeader.module.css'

export default function NavbarHeader() {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)

   const isTabletScreen = useMediaQuery('(max-width: 1024px)')

   {
      /* select color of navbar on homepage */
   }
   const toolbarStyles = {
      backgroundColor: pathname === '/' ? '#7F96FF' : '#D9D9D9',
      display: 'flex',
      justifyContent: 'space-between',
   }

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
         <AppBar
            sx={{ position: 'relative' }}
            className={styles['app-bar']}
            elevation={0}
         >
            <Toolbar sx={toolbarStyles}>
               {/* select login button for homepage */}
               {pathname === '/' ? (
                  <>
                     <Button
                        buttonText="Login"
                        backgroundColor="#BD9B45"
                        onClick={navigateToLogin}
                     />

                     {/* select burgermenu or links for homepage */}
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
                              <Link
                                 underline="none"
                                 component={RouterLink}
                                 to="/"
                              >
                                 <li>Home</li>
                              </Link>
                              <Link
                                 underline="none"
                                 component={RouterLink}
                                 to="/"
                              >
                                 <li>About</li>
                              </Link>
                           </span>
                           <RouterLink to="/">
                              <Button
                                 buttonText="Contact"
                                 backgroundColor="#BD9B45"
                                 color="secondary"
                                 disableElevation={true}
                              ></Button>
                           </RouterLink>
                        </ul>
                     )}
                  </>
               ) : (
                  <>
                     <Link
                        className={styles['instapigeon-title']}
                        underline="none"
                        component={RouterLink}
                        to="/"
                     >
                        <h2>InstaPigeon</h2>
                     </Link>

                     {/* select items or burgermenu */}
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
                              <Link
                                 underline="none"
                                 component={RouterLink}
                                 to="/"
                              >
                                 <li>Home</li>
                              </Link>
                              <Link
                                 underline="none"
                                 component={RouterLink}
                                 to="/"
                              >
                                 <li>About</li>
                              </Link>
                           </span>
                           <RouterLink to="/">
                              <Button
                                 buttonText="Contact"
                                 backgroundColor="#BD9B45"
                                 color="secondary"
                                 disableElevation={true}
                              ></Button>
                           </RouterLink>
                        </ul>
                     )}
                  </>
               )}
            </Toolbar>
         </AppBar>
      </>
   )
}
