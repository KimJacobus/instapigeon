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
import Posts from './pages/FotoGrid/Posts'
import { AccountPage } from './pages/Account/AccountPage'

import Landing from './pages/Landing'
import FotoGrid from './pages/FotoGrid/FotoGrid'

//context
import { RequireAuth } from './components/RequireAuth'

//styles
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import Home from './pages/Home/Home'
import CommentSection from './components/comment'
import CommentSectionTWo from './components/comments/testcmmt'
{/*import Toast from './components/toast/toast'**/}

const theme = createTheme({
   palette: {
      primary: {
         main: '#5A558F',
      },
      secondary: {
         main: '#D9D9D9',
         dark: '#5C5C5C',
      },
   },
})

function App() {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/posts/:id" element={<Posts />} />

            <Route
               path="/Grid"
               element={
                  // <RequireAuth>
                  <FotoGrid />
                  // </RequireAuth>
               }
            />
            <Route path="/Account" element={<AccountPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/toast" element={<CommentSectionTWo />} />
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
