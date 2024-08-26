"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter, redirect } from 'next/navigation';
import LayoutWrapper from '../../../components/LayoutWrapper';
import { useAppSelector } from '../../../lib/hooks';


export default function Layout({ children }) {
    const lang = useAppSelector((state) => state.lang);
    const router = useRouter();
    const {locale} = useParams()

    useEffect(() => {
       
        if (lang.lang !== locale) {
            
            router.push(`/${lang.lang}`);
        }

    }, [lang.lang, locale, router]);

    return (
        <LayoutWrapper>{children}</LayoutWrapper>
    );
}
