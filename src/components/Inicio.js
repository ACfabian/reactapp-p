import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/authContext'

export default function Inicial() {
  const {user,logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <div className='w-full max-w-xs m-auto text-black'>
      <h1 className='text-xl block text-indigo-600 xl:inline'> Welcome {user.email}</h1><br></br>

      <button 
      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      onClick={handleLogout}>
        Salir
    </button>
    </div>

  );
}