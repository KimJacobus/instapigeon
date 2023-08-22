import { useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

//components
import NavbarBottomPhone from './NavbarBottomPhone'
import NavbarHeadersPc from './NavbarHeadersPc'
import NavbarHeader from './NavbarHeader'
import NavbarAuth from './NavbarAuth'

export default function Navbar() {
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')

   const authed = sessionStorage.getItem('authed')
   const { pathname } = useLocation()
   const NoAuthNavbars = ['/', '/login', '/register']

   return (
      <div>
         <>
            {/* select navbar for no-auth pages */}
            <header>
               {NoAuthNavbars.includes(pathname) ? (
                  <NavbarHeader />
               ) : (
                  <NavbarAuth />
               )}
            </header>
         </>
         {/* select footer for tablet and smartphone */}
         {isTabletScreen ? (
            <footer>
               {/* only select footer on auth pages  */}
               {NoAuthNavbars.includes(pathname) ? '' : <NavbarBottomPhone />}
            </footer>
         ) : (
            <>
               <header>{/* <NavbarHeadersPc /> */}</header>
            </>
         )}
      </div>
   )
}
