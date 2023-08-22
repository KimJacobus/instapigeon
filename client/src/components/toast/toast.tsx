import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast(){
   const success = () =>
      toast.success('Success Login', {
         theme: 'colored',
         hideProgressBar: true,
         autoClose: 2000,
      })
   const error = () =>
      toast.error('Success Login', {
         theme: 'colored',
         hideProgressBar: true,
         autoClose: 2000,
      })
   return (
      <div>
         <button onClick={success}>Success!</button>
         <button onClick={error}>Error !</button>
         <ToastContainer
            theme="colored"
            hideProgressBar={true}
            autoClose={2000}
         />
      </div>
   )
}