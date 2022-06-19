import Metadata from './metadata'
export default function Layout({title, children}) {
    return (
        <>
        <Metadata />
        <main>
            <div className="page-wrapper with-navbar dark-mode">
                <div className='navbar justify-content-center'>
                        <h1 className='title navbar-brand'>
                            {title} | Blahaj Checker UK
                        </h1>
                </div>
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </main>
        </>
    )
}