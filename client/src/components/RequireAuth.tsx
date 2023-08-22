import { useAuthStore } from '../context/authStore'
import React, { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: ReactNode }): any {
   const location = useLocation()

   let authed = sessionStorage.getItem('auth')

   console.log(authed)

   // the problem is with passing the authed value here
   // why is it undefined here ?

   // when I put authed on true originally it works fine

   // something is always turning authed to false before it gets here

   // still having problems even with sessions storage

   // "works" now

   if (authed) {
      return authed === 'true' ? (
         children
      ) : (
         <Navigate to="/" replace state={{ path: location.pathname }} />
      )
   }
}

// dno 100% how the navigate state prop works
