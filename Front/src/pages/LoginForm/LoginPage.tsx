import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { useAuthStore } from '../../context/authStore'
import { Box } from '@mui/system'
import { RickyPigeon, VeronicaPigeon } from '../../components/graphics/Pigeons'

//styles
import styles from './LoginPage.module.css'

function LoginPage() {
   const { authed, login } = useAuthStore()
   const navigate = useNavigate()

   //inputState
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   //errorStates
   const [emailErr, setEmailErr] = useState<boolean>(false)
   const [passwordErr, setPasswordErr] = useState<boolean>(false)

   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log('handleLogin launched')
      console.log(authed)

      setEmailErr(false)
      setPasswordErr(false)

      if (email === '') {
         setEmailErr(true)
      }
      if (password === '') {
         setPasswordErr(true)
      }

      fetch('http://localhost:5000/signin', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            email,
            password,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            if (data.error) {
               toast.error(data.error, {
                  theme: 'colored',
                  hideProgressBar: true,
                  autoClose: 1000,
               })
            } else {
               localStorage.setItem('jwt', data.token)
               toast.success(`Let's fly!`, {
                  theme: 'colored',
                  hideProgressBar: true,
                  autoClose: 500,
               })
               login()
            }
         })
         .catch((error) => {
            console.error(error)
            toast.error(error, {
               theme: 'colored',
               hideProgressBar: true,
               autoClose: 1000,
            })
         })
   }

   useEffect(() => {
      if (authed) {
         setTimeout(() => navigate('/grid'), 700)
      }
   }, [authed])

   return (
      <div className={styles['background-card']}>
         <Box className={styles['box-background']}>
            <h2>Look what the pigeon dragged in!</h2>
            <p className={styles['paragraph']}>
               Glad to see you! if you ever get sick of our pigeon puns, why not
               join our flock and check out our job listings, so we can see even
               more of you!
            </p>

            <div>
               <Box className={styles['box-loginform']}>
                  <LoginForm
                     handleLogin={handleLogin}
                     setEmail={setEmail}
                     emailErr={emailErr}
                     setPassword={setPassword}
                     passwordErr={passwordErr}
                  />
               </Box>
            </div>
            <div className={styles['images-login']}>
               <RickyPigeon width={1200} />
               <VeronicaPigeon width={1200} />

               {/* <img src="/public/RickyPigeon.png" alt="RickyPigeon" />
               <img
                  src="/public/VeronicaPigeon.png"
                  alt="VeronicaPigeon"
               /> */}
            </div>
         </Box>
         <ToastContainer />
      </div>
   )
}

export default LoginPage
