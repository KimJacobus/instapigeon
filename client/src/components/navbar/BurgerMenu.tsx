import { IconButton, MenuItem, Menu, Fade } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useLocation } from 'react-router-dom'

interface IBurgerMenuProps {
   handleClick: (event: React.MouseEvent<HTMLElement>) => void
   handleClose: (event: React.MouseEvent<HTMLElement>) => void
   pathname: string
   open: boolean
   anchorEl: HTMLElement | null
   color: 'primary' | 'secondary' | 'warning' 
}

export const BurgerMenu = ({
   handleClick,
   handleClose,
   pathname,
   open,
   anchorEl,
   color
}: IBurgerMenuProps) => {
   return (
      <div className="burger-menu">
         <IconButton
            sx={{}}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            edge="start"
            color={color}
         >
            <MenuIcon />
         </IconButton>
         <Menu
            id="fade-menu"
            MenuListProps={{
               'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
         >
            <MenuItem
               onClick={handleClose}
               style={{
                  height: open ? '80px' : 'auto',
                  fontSize: '24px ',
               }}
            >
               Profile
            </MenuItem>
            <MenuItem
               onClick={handleClose}
               style={{
                  height: open ? '80px' : 'auto',
                  fontSize: '24px',
               }}
            >
               Setting
            </MenuItem>
            <MenuItem
               onClick={handleClose}
               style={{
                  height: open ? '80px' : 'auto',
                  fontSize: '24px',
               }}
            >
               Logout
            </MenuItem>
         </Menu>
      </div>
   )
}
