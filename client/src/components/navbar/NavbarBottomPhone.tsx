import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { Link } from 'react-router-dom'

export default function NavbarBottomPhone() {
   return (
      <>
         <AppBar
            position="fixed"
            sx={{ top: 'auto', bottom: 0, backgroundColor: '#5C5C5C' }}
         >
            <Toolbar
               sx={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'space-around',
               }}
            >
               <IconButton
                  component={Link}
                  to="/grid"
                  color="inherit"
                  aria-label="home"
               >
                  <HomeIcon />
               </IconButton>
               {/* <Box sx={{ flexGrow: 0.25 }} /> */}
               {/* <IconButton component={Link} to="/search" color="inherit">
                  <SearchIcon />
               </IconButton> */}
               <IconButton component={Link} to="/create" color="inherit">
                  <AddBoxIcon />
               </IconButton>
               <IconButton component={Link} to="/account" color="inherit">
                  <AccountBoxIcon />
               </IconButton>
            </Toolbar>
         </AppBar>
      </>
   )
}
