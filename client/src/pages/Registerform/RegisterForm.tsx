import { TextField } from '@mui/material'
import { Button } from '../../components/button/Button'
import { Container } from '@mui/system'
import { FormControlLabel, Checkbox } from '@mui/material'

interface IregisterFormProps {
   setFirstname: React.Dispatch<React.SetStateAction<string>>
   firstnameErr: boolean
   setLastname: React.Dispatch<React.SetStateAction<string>>
   lastnameErr: boolean
   setUsername: React.Dispatch<React.SetStateAction<string>>
   usernameErr: boolean
   setEmail: React.Dispatch<React.SetStateAction<string>>
   emailErr: boolean
   setPassword: React.Dispatch<React.SetStateAction<string>>
   passwordErr: boolean
   setPasswordAgain: React.Dispatch<React.SetStateAction<string>>
   passwordAgainErr: boolean
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const RegisterForm = ({
   setFirstname,
   firstnameErr,
   setLastname,
   lastnameErr,
   setUsername,
   usernameErr,
   setEmail,
   emailErr,
   setPassword,
   passwordErr,
   setPasswordAgain,
   passwordAgainErr,
   handleSubmit,
}: IregisterFormProps) => {
   return (
      <Container maxWidth="xs">
         <form
            style={{
               display: 'flex',
               flexDirection: 'column',
               margin: '3px',
            }}
         >
            <TextField
               sx={{ mb: 2 }}
               onChange={(e) => setFirstname(e.target.value)}
               size="small"
               label="firstname"
               required
               error={firstnameErr}
            />
            <TextField
               sx={{ mb: 2 }}
               onChange={(e) => setLastname(e.target.value)}
               size="small"
               label="lastname"
               variant="outlined"
               required
               error={lastnameErr}
            />
            <TextField
               sx={{ mb: 2 }}
               onChange={(e) => setUsername(e.target.value)}
               size="small"
               label="username"
               required
               error={usernameErr}
            />
            <TextField
               sx={{ mb: 2 }}
               onChange={(e) => setEmail(e.target.value)}
               size="small"
               label="email"
               type="email"
               variant="outlined"
               required
               error={emailErr}
            />
            <TextField
               sx={{ mb: 2 }}
               onChange={(e) => setPassword(e.target.value)}
               size="small"
               label="password"
               type="password"
               variant="outlined"
               required
               error={passwordErr}
               // helperText="Incorrect entry."
            />
            <TextField
               sx={{}}
               onChange={(e) => setPasswordAgain(e.target.value)}
               size="small"
               label="password again"
               type="password"
               variant="outlined"
               required
               error={passwordAgainErr}
            />

            <FormControlLabel
               sx={{ mb: 1 }}
               control={<Checkbox required/>}
               label="I love cake and cookies"
            />

            <Button
               onClick={handleSubmit}
               buttonText="submit"
               // iconComponent={<AcUnitIcon />}
            />
         </form>
      </Container>
   )
}
