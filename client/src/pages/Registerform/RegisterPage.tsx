import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Box } from '@mui/material'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterForm } from './RegisterForm'

import styles from './RegisterPage.module.css'

function RegisterPage() {
   const navigate = useNavigate()

   //inputStates
   const [firstname, setFirstname] = useState<string>('')
   const [lastname, setLastname] = useState<string>('')
   const [name, setUsername] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [passwordAgain, setPasswordAgain] = useState<string>('')

   //errorStates
   const [firstnameErr, setFirstnameErr] = useState<boolean>(false)
   const [lastnameErr, setLastnameErr] = useState<boolean>(false)
   const [usernameErr, setUsernameErr] = useState<boolean>(false)
   const [emailErr, setEmailErr] = useState<boolean>(false)
   const [passwordErr, setPasswordErr] = useState<boolean>(false)
   const [passwordAgainErr, setPasswordAgainErr] = useState<boolean>(false)

   const launchToast = () => {
      toast.error(
         `please fill in all the fields, use your imagination, you can do it!`,
         {
            theme: 'colored',
            hideProgressBar: true,
            autoClose: 1000,
         }
      )
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   const fetchAccount = async () => {
      fetch('http://localhost:5000/signup', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            name,
            email,
            password,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data)

            if (data.error) {
               console.log(data.error)

               toast.error(data.error, {
                  theme: 'colored',
                  hideProgressBar: true,
                  autoClose: 1000,
               })
            } else {
               // succes!
               toast.success(`Getting you signed in!`, {
                  theme: 'colored',
                  hideProgressBar: true,
                  autoClose: 500,
               })
               setTimeout(() => {
                  navigate('/login')
               }, 1500)
            }
         })
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setFirstnameErr(false)
      setLastnameErr(false)
      setUsernameErr(false)
      setEmailErr(false)
      setPasswordErr(false)
      setPasswordAgainErr(false)

      // form validation

      if (firstname === '') {
         setFirstnameErr(true)
      }
      if (lastname === '') {
         setLastnameErr(true)
      }
      if (name === '') {
         setUsernameErr(true)
      }
      if (password === '') {
         setPasswordErr(true)
      }
      if (passwordAgain === '') {
         setPasswordAgainErr(true)
      }
      if (email === '') {
         setEmailErr(true)
      }

      // if (
      //    firstname === '' ||
      //    lastname === '' ||
      //    name === ''||
      //    password === ''  ||
      //    passwordAgain === ''||
      //    email === ''
      // ) {
      //    launchToast()
      // }

      if (
         [firstname, lastname, name, password, passwordAgain, email].some(
            (value) => value === ''
         )
      ) {
         launchToast()
      }

      if (firstname && lastname && email && password && passwordAgain) {
         if (!emailRegex.test(email)) {
            toast.error(`That's not a valid email, buddy`, {
               theme: 'colored',
               hideProgressBar: true,
               autoClose: 500,
            })
         } else if (password !== passwordAgain) {
            setPasswordErr(true)
            setPasswordAgainErr(true)
            toast.error(`your passwords don't match`, {
               theme: 'colored',
               hideProgressBar: true,
               autoClose: 500,
            })
            console.log('something went wrong')
         } else if (password === passwordAgain) {
            console.log('trying to create user')
            fetchAccount()
         }
      }
   }

   return (
      <div className={styles['register-page']}>
         <Box className={styles['box-bg']}>
            <h2>Before you fly, lets get you chipped first</h2>
            <p>
               Don't worry we don't care about selling you anything We just need
               a name to add to a number, so we can easily find your pigeons in
               our coop
            </p>

            <div className={styles['register-form']}>
               <Box className={styles['box-register']}>
                  <RegisterForm
                     setFirstname={setFirstname}
                     firstnameErr={firstnameErr}
                     setLastname={setLastname}
                     lastnameErr={lastnameErr}
                     setUsername={setUsername}
                     usernameErr={usernameErr}
                     setEmail={setEmail}
                     emailErr={emailErr}
                     setPassword={setPassword}
                     passwordErr={passwordErr}
                     setPasswordAgain={setPasswordAgain}
                     passwordAgainErr={passwordAgainErr}
                     handleSubmit={handleSubmit}
                  />
               </Box>
            </div>
         </Box>
         <ToastContainer />
      </div>
   )
}

export default RegisterPage
