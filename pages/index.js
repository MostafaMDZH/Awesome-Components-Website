import Head from 'next/head'
import Link from 'next/link'

let isWelcomeSbShow = false;
let SB = null;

export default function Main(){

    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>

            <Head>
                <title>Awesome Snackbar | React, Javascript, and Typescript compatible snackbar</title>
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
                        <p className='sectionDescription'>React, Javascript, and Typescript compatible components</p>

                        {/* snackbar */}
                        <h2 className='componentName' id='snackbar' title='demo and documentation'># <a href='https://awesome-snackbar.demos.mostafa-mdzh.ir'>Snackbar</a></h2>
                        <ul className='features'>
                            <li>Action button</li>
                            <li>Dark/Light theme</li>
                            <li>Custom position</li>
                            <li>Icon support</li>
                            <li>Custom style</li>
                            <li>Custom markup</li>
                            <li>Multiple snackbars at the same time</li>
                            <li>Update on fly</li>
                            <li>User event detection</li>
                            <li>Custom timeout</li>
                            <li>Manual hiding</li>
                            <li>Callback after hide</li>
                            <li>Responsive design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                        </ul>

                        {/* toast */}
                        <h2 className='componentName' id='toast' title='demo and documentation'># <a href='https://awesome-toast.demos.mostafa-mdzh.ir'>Toast</a></h2>
                        <ul className='features'>
                            <li>Custom position</li>
                            <li>Dark/Light theme</li>
                            <li>Custom style</li>
                            <li>Custom markup</li>
                            <li>Update on fly</li>
                            <li>User event detection</li>
                            <li>Custom timeout</li>
                            <li>Manual hiding</li>
                            <li>Callback after hide</li>
                            <li>Responsive design</li>
                            <li>Dynamic HTML</li>
                            <li>Lightweight</li>
                        </ul>

                    </div>

                </div>

            </div>

            {/* footer */}
            <footer id='footer'>
                <p>Made by <a href='https://github.com/MostafaMDZH'>Mostafa Mohammadzadeh</a></p>
                <p id='dash'>-</p>
                <p id='githubLink'>Source on <a href='https://github.com/MostafaMDZH/Awesome-Snackbar'>Github</a></p>
                <p id='awesomeComponents'>From <Link href='/'><a>Awesome Components</a></Link></p>
            </footer>

        </div>
    )
}