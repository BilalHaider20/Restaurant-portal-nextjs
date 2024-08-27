"use client"
import Link from 'next/link'
import Image from 'next/image'
import images from "/public/assets/images/index"
import Dropdown from './DropDown';
import LangDropdown from './LangDropdown'

const Footer = () => {
    const options = ["PKR", "EUR", "USD", "SAR"];
    return (
        
        <div className='w-full py-5 px-4 '>
            <div className="flex flex-col gap-10 items-center justify-between mt-auto text-center md:text-left md:items-start md:flex-row md:gap-1">
                <ul className="footerDiv">
                    <li className="font-medium text-lg">About</li>
                    <ul className="footerLinkDiv">
                        <li>
                            <Link href="">About BookmeSA</Link>
                        </li>
                        <li>
                            <Link href="">How it works</Link>
                        </li>
                        <li>
                            <Link href="">Careers</Link>
                        </li>
                        <li>
                            <Link href="">Press</Link>
                        </li>
                        <li>
                            <Link href="">Blog</Link>
                        </li>
                    </ul>
                </ul>
                <ul className="footerDiv ">
                    <li className="font-medium text-lg">Partner with us</li>
                    <ul className="footerLinkDiv ">
                        <li>
                            <Link href="">Partnership programs</Link>
                        </li>
                        <li>
                            <Link href="">Affiliate program</Link>
                        </li>
                        <li>
                            <Link href="">Connectivity partners</Link>
                        </li>
                        <li>
                            <Link href="">Promotions and events</Link>
                        </li>
                        <li>
                            <Link href="">Community</Link>
                        </li>
                        <li>
                            <Link href="">Loyalty program</Link>
                        </li>
                    </ul>
                </ul>
                <ul className="footerDiv">
                    <li className="font-medium text-lg">Support</li>
                    <ul className="footerLinkDiv ">
                        <li>
                            <Link href="">Help Center</Link>
                        </li>
                        <li>
                            <Link href="">Contact us</Link>
                        </li>
                        <li>
                            <Link href="">Privacy policy</Link>
                        </li>
                        <li>
                            <Link href="">Terms of service</Link>
                        </li>
                        <li>
                            <Link href="">Trust and safety</Link>
                        </li>
                    </ul>
                </ul>
                <ul className="footerDiv">
                    <li className="font-medium text-lg">Get the app</li>
                    <ul className="footerLinkDiv ">
                        <li>
                            <Link href="">BookmeSA for Android</Link>
                        </li>
                        <li>
                            <Link href="">BookmeSA for iOS</Link>
                        </li>
                        <li className='mx-auto md:mx-[1px]'>
                            <Link href=""><Image src={images.app_store} alt='app store icon'></Image></Link>
                        </li>
                        <li className='mx-auto md:mx-[1px]'>
                            <Link href=""><Image src={images.google_play} alt='google play icon'></Image></Link>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className='flex flex-col gap-5 justify-between items-center mt-10 py-3 px-5 border-divider-grey border-t md:justify-between md:flex-row '>
                <div className='flex items-center gap-2'>
                    <LangDropdown />
                    <Dropdown options={options} />
                </div>
                <span className='text-grey-text'>© 2024 BookmeSA incorporated</span>
                <div className='flex items-center gap-3'>
                    <Image src={images.twitter} alt='twitter icon'></Image>
                    <Image src={images.instagram} alt='instagram icon'></Image>
                    <Image src={images.fb} alt='facebook icon'></Image>
                </div>
            </div>
        </div>

    )
}

export default Footer