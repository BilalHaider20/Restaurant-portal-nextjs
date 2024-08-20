import Image from "next/image"
import logo from '/public/assets/images/BookmeLogo.png'


export default function AuthLayout({ children }) {
  return (
    <html className="flex h-full">

      <body>
        <div className="flex items-center justify-between px-6 p-3">
          <Image src={logo} />
          <a href="" className="text-primary-blue ">Help</a>
        </div>
        <div className="flex h-full">
          <div className='flex flex-col items-center justify-center w-6/12 h-full bg-background-blue'>
            <div className='container mx-auto w-9/12 text-center'>
              <h1 className='text-3xl font-semibold'>Welcome to Bookme</h1>
              <span className='text-lg font-extralight'>Please provide details below to login your account</span>
            </div>
            {children}
            <p className='text-grey'>or continue with</p>
            <div className='flex flex-col w-9/12 mt-3 space-y-2'>
              <a className='btnSigninWith' href=""><Image src="/assets/images/google.png" width={15} height={15}></Image> Sign in with Google</a>
              <a className='btnSigninWith' href=""><Image src="/assets/images/facebook.png" width={15} height={15}></Image> Sign in with Facebook</a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center px-5 w-6/12 h-full border-box'>
            <div className="relative w-full h-5/6">
              <Image
                src="/assets/images/login-img.png"
                alt="image"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}