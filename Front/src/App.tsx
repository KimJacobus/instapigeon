import {
   createRoutesFromElements,
   Route,
   createBrowserRouter,
   RouterProvider,
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'

//components
import RegisterPage from './pages/Registerform/RegisterPage'
import LoginPage from './pages/LoginForm/LoginPage'
import CreatePage from './pages/Create/CreatePage'
import Posts from './pages/Grid/Posts'
import { AccountPage } from './pages/Account/AccountPage'
import CreatePost from './pages/Create/CreatePage'

import Landing from './pages/Landing'
import Grid from './pages/Grid/Grid'

import Home from './pages/Home/Home'

//context
import { RequireAuth } from './components/RequireAuth'

//styles
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import CommentSectionTest from './components/comments/deletest'


const theme = createTheme({
   palette: {
      primary: {
         main: '#5A558F',
      },
      secondary: {
         main: '#D9D9D9',
         dark: '#5C5C5C',
      },
      warning: {
         main: '#7F96FF',
      },
   },
})

function App() {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/posts/:id" element={<Posts setPostModal={{}} />} /> */}
            <Route
               path="/grid"
               element={
                  // <RequireAuth>
                  <Grid />
                  // </RequireAuth>
               }
            />

            <Route path="/account" element={<AccountPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/home" element={<Home />} />
            {/*<Route path="/toast" element={<Toast />} />*/}
            {/* <Route path="/test" element={<CommentSectionTest />} /> */}
         </Route>
      )
   )
   return (
      <>
         <StyledEngineProvider>
            <ThemeProvider theme={theme}>
               <RouterProvider router={router} />
            </ThemeProvider>
         </StyledEngineProvider>
      </>
   )
}

export default App
