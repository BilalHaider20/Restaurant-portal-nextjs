import Image from "next/image"
import logo from '/public/assets/images/BookmeLogo.png'


export default function AuthLayout({ children }) {
  return (
        <div>
          <div className="flex items-center justify-between px-6 p-3 ">
            <Image src={logo} />
            <a href="" className="text-primary-blue ">Help</a>
          </div>
          <div className="flex flex-grow flex-col h-full md:flex-row">
            {children}
            <div className='flex flex-col items-center justify-center px-5 w-full h-screen border-box md:w-6/12 '>
              <div className="relative w-full h-screen">
                <Image
                  src="/assets/images/login-img.png"
                  alt="image"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
  )
}