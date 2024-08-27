import SearchFlights from "../../../components/SearchFlights";
import images from "/public/assets/images/index";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useLocale from "next-intl";
import { useAppSelector } from "../../../lib/hooks";
export default function Page(params) {

  const t = useTranslations('Flights.Visa-Info');
  const dir = params.locale === "ar" ? "rtl" : "ltr";
  return (
    <div
      className={`bg-white dark:bg-gray-800 dark:text-white flex flex-col gap-5 w-full pb-5`}
    >
      <SearchFlights />
      <div
        className={` flex justify-between items-center p-3 px-5 mx-5 rounded-lg`}
      >
        <div className="flex items-center gap-3">
          <Image src={images.visa} alt="icon visa"></Image>
          <div>
            <h2 className="text-lg font-semibold text-heading-grey">
              {t('need-visa-info')}
            </h2>
            <span className="text-grey-text">{t('description')}</span>
          </div>
        </div>
        <SlArrowRight
            className={`text-grey-text `}
          />

      </div>

      <div
        className={`mx-5 rounded-lg bg-cover bg-center w-full  aspect-w-3 aspect-h-1 `}
        style={{
          backgroundImage: images.abudhabi
            ? `url(${images.abudhabi})`
            : "none",
        }}
      ></div>
    </div>
  );
}


export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}