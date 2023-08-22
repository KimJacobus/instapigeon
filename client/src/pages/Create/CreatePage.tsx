import { useState, useEffect, ChangeEvent } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { Input } from '@mui/material'

import { Container, TextField, Link } from '@mui/material'

interface changeProps {
   postDetails:
      | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
      | undefined
      | void
}
const CreatePost = () => {
   const navigate = useNavigate()
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [image, setImage] = useState<File | string | Blob>('')
   const [url, setUrl] = useState('')
   useEffect(() => {
      if (url) {
         console.log(url)

         fetch('http://localhost:5000/createpost', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
               title,
               body,
               pic: url,
            }),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.error) {
                  console.log(data.error);
                  
               } else {
                  navigate('/grid')
               }
            })
            .catch((err) => {
               console.log(err)
            })
      }
   }, [url])

   const postDetails = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(image)

      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'Sebagram')
      data.append('cloud_name', 'dz9k0tal4')
      fetch('https://api.cloudinary.com/v1_1/dz9k0tal4/image/upload', {
         method: 'post',
         body: data,
      })
         .then((res) => res.json())

         .then((data) => {
            console.log(data)

            setUrl(data.url)
         })
         .catch((err) => {
            console.log(err)
         })
   }

   return (
      <Container maxWidth="xs">
         <form
            style={{
               display: 'flex',
               flexDirection: 'column',
               marginTop: '10%',
            }}
         >
            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               label="title"
               size="medium"
               required
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />

            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               label="body"
               size="medium"
               required
               onChange={(e) => setBody(e.target.value)}
               value={body}
            />

            <input
               type="file"
               onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setImage(e.target.files?.[0] as File)
               }
            ></input>

            <Button buttonText="Submit" onClick={(e) => postDetails(e)} />
         </form>
      </Container>
   )
}

export default CreatePost
