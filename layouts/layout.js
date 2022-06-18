import Head from 'next/head'
export default function Layout({ title, children}) {
    return (
        <>
            <Head>
                <title>{title} | BlÅhaj Stock Checker UK</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}