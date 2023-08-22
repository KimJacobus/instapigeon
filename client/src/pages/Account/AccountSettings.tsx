import * as React from 'react'
import { Button } from '../../components/button/Button'
import CircleIcon from '@mui/icons-material/Circle'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

interface IsettingsNavProp {
   settingsNav?: boolean
   setSettingsNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountSettings = ({ setSettingsNav }: IsettingsNavProp) => {
   function handleClick(): void {
      setSettingsNav(true)
   }
   async function handleSubmit(): Promise<void> {
      // call update hook to API here
   }

   return (
      <>
         {/* fetch username and bio from res object and input here in the label tag */}
         <Container maxWidth="xs" sx={{ overflow: 'hidden', marginTop: '1em' }}>
            <Button
               onClick={handleClick}
               buttonText="X"
               backgroundColor="#5C5C5C"
            ></Button>
            <div
               className="AccountSettings"
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginBottom: '5em',
               }}
            >
               <div
                  className="updateProfile"
                  style={{
                     textAlign: 'center',
                     marginBottom: '2em',
                  }}
               >
                  <CircleIcon sx={{ fontSize: '600%', margin: '0% 33%' }} />

                  {/* launch  modal, to input new picture */}
                  <p>
                     <Link to="/account">Edit change profile picture</Link>
                  </p>
               </div>
               <Box
                  component="form"
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{
                     '& > :not(style)': { m: 1, width: '25ch' },
                     marginLeft: '10%',
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
               >
                  <TextField id="username" label="username" variant="filled" />
                  <TextField id="bio" label="bio" variant="filled" />
                  <div style={{ marginLeft: '30%' }}>
                     <Button
                        buttonText="Submit"
                        backgroundColor="#5C5C5C"
                     ></Button>
                  </div>
               </Box>
            </div>
            {/* <div
               className="bottomLinks"
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  margin : '0% 12%'
               }}
            >
               <p>
                  <Link to="/account">Edit change profile picture</Link>
               </p>
          
            </div> */}
         </Container>
      </>
   )
}
