import Image from "next/image"
export default function AuthLayout({children}){
    return(
        <html className="flex h-full">
        <body className="flex">
          {children}
          <div className='flex flex-col items-center justify-center px-5 w-6/12 h-full'>
            <div className="relative w-full h-4/6">
              <Image
                src="/assets/images/login-img.png"
                alt="image"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </body>
      </html>
    )
}