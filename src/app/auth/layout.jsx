import Image from "next/image"
import logo from '/public/assets/images/BookmeLogo.png'



export default function AuthLayout({ children }) {
  return (
    <html className="flex h-full">

      <body>
        <div className="flex items-center justify-between px-6 p-3 ">
          <Image src={logo} />
          <a href="" className="text-primary-blue ">Help</a>
        </div>
        <div className="flex flex-grow ">
          {children}
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