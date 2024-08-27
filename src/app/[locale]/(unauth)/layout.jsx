"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter, redirect } from 'next/navigation';
import LayoutWrapper from '../../../components/LayoutWrapper';
import { useAppSelector } from '../../../lib/hooks';


export default function Layout({ children }) {
    const { lang }= useAppSelector((state) => state.lang);
    const router = useRouter();
    const {locale} = useParams()

    useEffect(() => {
        console.log("language", locale);
        if (lang !== locale) {
            console.log(lang);
            router.push(`/${lang}`);
        }

    }, [lang, locale, router]);

    return (
        <LayoutWrapper>{children}</LayoutWrapper>
    );
}
