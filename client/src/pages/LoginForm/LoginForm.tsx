import { Typography, Container, TextField } from '@mui/material'
import { Button } from '../../components/button/Button'
import { Link } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'

import styles from './LoginPage.module.css'

interface IloginFormProps {
   handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
   setEmail: React.Dispatch<React.SetStateAction<string>>
   emailErr: boolean
   setPassword: React.Dispatch<React.SetStateAction<string>>
   passwordErr: boolean
}

export const LoginForm = ({
   handleLogin,
   setEmail,
   emailErr,
   setPassword,
   passwordErr,
}: IloginFormProps) => {
   return (
      <form className={styles['login-form']}>
         <TextField
            sx={{ mb: 2, color: '7F96FF' }}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            size="small"
            required
            error={emailErr}
         />
         <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            type="password"
            size="small"
            required
            error={passwordErr}
         />
         <Link>
            <p>forgot your password? don't be ashamed, it happens</p>
         </Link>
         <Button onClick={handleLogin} buttonText="Login" />
      </form>
   )
}
