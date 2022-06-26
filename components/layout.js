import Image from 'next/image'
import Metadata from './metadata'
export default function Layout({title, children}) {
    return (
        <>
        <Metadata />
        <main>
            <div className="page-wrapper with-navbar dark-mode with-navbar-fixed-bottom">
                <div className='navbar justify-content-center'>
                        <h1 className='title navbar-brand'>
                            {title} | Blahaj Checker UK
                        </h1>
                </div>
                <div className="content-wrapper">
                    {children}
                    <p className='card justify-content-center flex'>
                        &copy; {new Date().getFullYear()} <a href="https://sean-outram.dev">Sean Outram</a>
                        <br />
                            Powered by:
                            <br />
                            <Image src="/vercel.svg" alt="Vercel Logo" width="150px" height="100px" />
                    </p>
                </div>
            </div>
        </main>
        </>
    )
}