import Head from 'next/head'
import Link from 'next/link'

export default function Main(){

    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>

            <Head>
                <title>Awesome Components | React, Angular, Vue, Typescript, and Pure Js UI Components</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* header */}
            <header id='header'>
                <Link href='/'><a className='headerLink'>Awesome Components</a></Link>
                <Link href='https://www.buymeacoffee.com/mostafamdzh'><a className='headerLink' id='coffee'>buy me a coffee! :)</a></Link>
            </header>

            <div id='container'>

                <div id='main'>

                    {/* navigation */}
                    <div id='navigation'>
                        <div id='navigationWrapper'>
                            <a className='navLink' href='#selector'>Selector</a>
                            <a className='navLink' href='#snackbar'>Snackbar</a>
                            <a className='navLink' href='#toast'   >Toast   </a>
                        </div>
                    </div>

                    {/* content */}
                    <div id='content'>

                        {/* intro */}
                        <h3 id='awesome'><Link href='/'>Awesome</Link></h3>
                        <div id='name-versionWrapper'>
                            <h1 id='appName'><Link href='/'>Components</Link></h1>
                        </div>
                        <p className='sectionDescription'>React, Angular, Vue, Typescript, and Pure Js UI Components.</p>

                        {/* image viewer */}
                        <div className='componentNameWrapper'>
                            <a className='componentName' id='selector' href='#selector'># Image Viewer</a>
                            <div className='linkWrapper'>
                                [&nbsp;
                                    <a href='https://awesome-image-viewer.demos.mostafa-mdzh.ir'>Docs & Demo</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://github.com/MostafaMDZH/Awesome-Image-Viewer'>Github</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://www.npmjs.com/package/awesome-image-viewer'>NPM</a>
                                &nbsp;]
                            </div>
                        </div>
                        <ul className='features'>
                            <li>Lazy Loading</li>
                            <li>Zoomable</li>
                            <li>Custom Buttons</li>
                            <li>Description</li>
                            <li>Custom Select</li>
                            <li>Swipe On Touchscreen</li>
                            <li>Cover Size</li>
                            <li>Thumbnail Support</li>
                            <li>Navigation With Arrow Keys</li>
                            <li>Responsive Design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                            <li>Zero Dependency</li>
                        </ul>

                        {/* selector */}
                        <div className='componentNameWrapper'>
                            <a className='componentName' id='selector' href='#selector'># Selector</a>
                            <div className='linkWrapper'>
                                [&nbsp;
                                    <a href='https://awesome-selector.demos.mostafa-mdzh.ir'>Docs & Demo</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://github.com/MostafaMDZH/Awesome-Selector'>Github</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://www.npmjs.com/package/awesome-selector'>NPM</a>
                                &nbsp;]
                            </div>
                        </div>
                        <ul className='features'>
                            <li>Custom Title</li>
                            <li>Searchable</li>
                            <li>Icon Support</li>
                            <li>Recent Selects</li>
                            <li>Custom Column Number</li>
                            <li>Dark/Light Theme</li>
                            <li>Custom Style</li>
                            <li>Navigation With Arrow Keys</li>
                            <li>Responsive Design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                            <li>Zero Dependency</li>
                        </ul>

                        {/* snackbar */}
                        <div className='componentNameWrapper'>
                            <a className='componentName' id='snackbar' href='#snackbar'># Snackbar</a>
                            <div className='linkWrapper'>
                                [&nbsp;
                                    <a href='https://awesome-snackbar.demos.mostafa-mdzh.ir'>Docs & Demo</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://github.com/MostafaMDZH/Awesome-Snackbar'>Github</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://www.npmjs.com/package/awesome-snackbar'>NPM</a>
                                &nbsp;]
                            </div>
                        </div>
                        <ul className='features'>
                            <li>Action Button</li>
                            <li>Dark/Light Theme</li>
                            <li>Custom Position</li>
                            <li>Icon Support</li>
                            <li>Custom Style</li>
                            <li>Custom Markup</li>
                            <li>Multiple Snackbars At The Same Time</li>
                            <li>Update On Fly</li>
                            <li>User Event Detection</li>
                            <li>Custom Timeout</li>
                            <li>Manual Hiding</li>
                            <li>Callback After Hide</li>
                            <li>Responsive Design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                            <li>Zero Dependency</li>
                        </ul>

                        {/* toast */}
                        <div className='componentNameWrapper'>
                            <a className='componentName' id='toast' href='#toast'># Toast</a>
                            <div className='linkWrapper'>
                                [&nbsp;
                                    <a href='https://awesome-toast.demos.mostafa-mdzh.ir'>Docs & Demo</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://github.com/MostafaMDZH/Awesome-Toast'>Github</a>
                                    &nbsp;|&nbsp;
                                    <a href='https://www.npmjs.com/package/awesome-toast-component'>NPM</a>
                                &nbsp;]
                            </div>
                        </div>
                        <ul className='features'>
                            <li>Custom Position</li>
                            <li>Dark/Light Theme</li>
                            <li>Custom Style</li>
                            <li>Custom Markup</li>
                            <li>Update On Fly</li>
                            <li>User Event Detection</li>
                            <li>Custom Timeout</li>
                            <li>Manual Hiding</li>
                            <li>Callback After Hide</li>
                            <li>Responsive Design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                            <li>Zero Dependency</li>
                        </ul>

                    </div>

                </div>

            </div>

            {/* footer */}
            <footer id='footer'>
                <p>Made with ♡ by <a href='https://github.com/MostafaMDZH'>Mostafa Mohammadzadeh</a></p>
            </footer>

        </div>
    )
}