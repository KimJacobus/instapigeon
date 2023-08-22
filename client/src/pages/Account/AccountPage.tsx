import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import GridList from '../Grid/GridList'
import { AccountElements } from './AccountElements'
import { AccountSettings } from './AccountSettings'

export const AccountPage = () => {
   const url = 'http://localhost:3000/posts'
   const { data, isPending, error } = useFetch(url)

   const [settingsNav, setSettingsNav] = useState<boolean>(true)

   return (
      <div>
         <div
            style={{
               position: 'absolute',
               backgroundColor: '#D9D9D9',
               width: '100%',
               height: '100%',
            }}
         >
            {settingsNav ? (
               <>
                  <AccountElements setSettingsNav={setSettingsNav} />

                  <div className="AccountGrid">
                     {error && <p className="error">{error}</p>}
                     {isPending && <p className="loading">Loading...</p>}
                     {/* sort the cards first here ?  */}

                     {/* {data && <GridList posts={data} />} */}
                  </div>
               </>
            ) : (
               <>
                  {/*  turn this into a seperate module component */}
                  <AccountSettings setSettingsNav={setSettingsNav} />
               </>
            )}
         </div>
      </div>
   )
}
