"use client"
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import "../styles/globals.css"    

export default function Index() {
  const router = useRouter();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, setError] = useState(null);

// const HandleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   console.log('Submitting form...');

//   try {
//     console.log('Sending request to /api/signin');
//     const res = await fetch('/api/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     console.log('Response status:', res.status);

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log('Response data:', data);

//     if (data.success) {
//       console.log('Sign-in successful', data);
//       // Handle successful sign-in
//     } else {
//       setError(data.message);
//     }
//   } catch (error) {
//     console.error('Error in HandleSubmit:', error);
//     setError('An unexpected error occurred');
//   }
// };


  return (
    <div className="flex min-h-full flex-col justify-center align-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6"  method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" value={email} onChange={(e)=>setemail(e.target.value)} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button onClick={()=>router.push('/dashboard')} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </form>

        
      </div>
    </div>
  );
}
