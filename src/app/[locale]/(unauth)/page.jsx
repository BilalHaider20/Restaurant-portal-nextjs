import SearchFlights from "../../../components/SearchFlights"
import images from "/public/assets/images/index"
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image"
export default function Page() {

    return (
        <div className="flex flex-col gap-5 w-full bg-background-blue pb-5  ">
            <SearchFlights />
            <div className="bg-white flex justify-between items-center p-3 px-5 mx-5 rounded-lg">
                <div className="flex items-center gap-3">
                    <Image src={images.visa} alt="icon visa"></Image>
                    <div>
                        <h2 className="text-lg font-semibold text-heading-grey">Need Visa Information?</h2>
                        <span className="text-grey-text">We’ve got you covered!</span>
                    </div>
                </div>
                <SlArrowRight className="text-grey-text" />
            </div>

            <div className="mx-5 rounded-lg bg-cover bg-center w-full  aspect-w-3 aspect-h-1" style={{ backgroundImage: images.abudhabi ? `url(${images.abudhabi})` : 'none' }}>

            </div>
        </div>
    )

}