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

                        <a href='https://github.com/MostafaMDZH/Awesome-Snackbar' id='github'>Github</a>

                        {/* intro */}
                        <h3 id='awesome'><Link href='/'>Awesome</Link></h3>
                        <div id='name-versionWrapper'>
                            <h1 id='appName'><Link href='/'>Snackbar</Link></h1>
                            <a id='version'>V1.1.0</a>
                        </div>
                        <p className='sectionDescription'>React, Javascript, and Typescript compatible snackbar</p>

                        {/* installation */}
                        <h3 className='sectionName' id='installation'><a href='#installation'># Installation</a></h3>
                        <p className='step'><a className='bold'>{'>'} step 1 : </a>you can use either npm or yarn, or import the main file with the script tag.</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('npm i awesome-snackbar')}>
                                <p>npm i <span>awesome-snackbar</span></p>
                            </button>
                            <p className='comment'># yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('yarn add awesome-snackbar')}>
                                <p>yarn add <span>awesome-snackbar</span></p>
                            </button>
                            <p className='comment'>
                                # html (download the snackbar.js file from the&nbsp;
                                <a href='https://github.com/MostafaMDZH/Awesome-Snackbar/tree/main/src'>src</a>
                                &nbsp;directory)
                            </p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('<script src="snackbar.js"></script>')}>
                                <p>{"<script src=\""}<span>snackbar.js</span>{"\"></script>"}</p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 2 : </a>include the package in your code:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm and yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('import Snackbar from \'awesome-snackbar\'')}>
                                <p>import <span>Snackbar</span> from <span>&apos;awesome-snackbar&apos;</span></p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 3 : </a>start making snackbars!</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable' onClick={()=>Snackbar('Hello World! 👋')}>
                                <p><span>Snackbar</span>(&apos;Hello world! 👋&apos;);</p>
                            </button>
                        </div>

                        {/* action button */}
                        <h3 className='sectionName' id='action-button'><a href='#action-button'># Action Button</a></h3>
                        <p className='sectionDescription'>Create a custom button with a callback using the action button:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Snackbar('Make another one!', {
                                        actionText: 'Make',
                                        onAction: () => Snackbar('Another Snackbar')
                                    });
                                }}>
                                <p>
                                    {"Snackbar('Make another one!'), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"actionText"}</span>{": 'Make',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"onAction"  }</span>{": () => Snackbar('Another Snackbar')"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                        {/* position */}
                        <h3 className='sectionName' id='position'><a href='#position'># Position</a></h3>
                        <p className='sectionDescription'>You can position the snackbar by setting the position parameter:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># bottom left (default)</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the bottom left`, { position: 'bottom-left' })}>
                                <p>
                                    {"Snackbar(`I'm at the bottom left`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'bottom-left'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># bottom center</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the bottom center`, { position: 'bottom-center' })}>
                                <p>
                                    {"Snackbar(`I'm at the bottom center`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'bottom-center'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># bottom right</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the bottom right`, { position: 'bottom-right' })}>
                                <p>
                                    {"Snackbar(`I'm at the bottom right`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'bottom-right'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># top left</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the top left`, { position: 'top-left' })}>
                                <p>
                                    {"Snackbar(`I'm at the top left`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'top-left'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># top center</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the top center`, { position: 'top-center' })}>
                                <p>
                                    {"Snackbar(`I'm at the top center`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'top-center'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># top right</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm at the top right`, { position: 'top-right' })}>
                                <p>
                                    {"Snackbar(`I'm at the top right`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'top-right'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* icon support */}
                        <h3 className='sectionName' id='icon-support'><a href='#icon-support'># Icon Support</a></h3>
                        <p className='sectionDescription'>You can add an icon to your snackbar with the iconSrc parameter:</p>
                        <div className='codeWrapper'>
                            <p className='comment'>import loadingIcon from &apos;./src/loading.gif&apos;;</p>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`Loading... please wait`, { iconSrc: loadingIcon.src, actionText: 'Stop'})}>
                                <p>
                                    {"Snackbar(`Loading... please wait`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"iconSrc: 'loadingIcon.src',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"actionText: 'Stop'"}<br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* theme */}
                        <h3 className='sectionName' id='theme'><a href='#theme'># Theme</a></h3>
                        <p className='sectionDescription'>The default theme is dark, but you can enable the light theme with the theme parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`Today is...`, { theme: 'light', position: 'top-center', actionText: 'Sunday!'})}>
                                <p>
                                    {"Snackbar(`Today is...`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"theme: 'light',"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"position: 'top-center',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"actionText: 'Sunday!'"}<br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* custom style */}
                        <h3 className='sectionName' id='custom-style'><a href='#custom-style'># Custom Style</a></h3>
                        <p className='sectionDescription'>The Awesome snackbar&apos;s html markup is equivalent to below:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection'>
                                <p>
                                    {"<div class='"}<span>{"container'"}</span>{">"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<p class='"}<span>{"message'"}</span>{"></p>"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<input type='button' class='"}<span>{"actionButton'"}</span>{"/>"}<br></br>
                                    {"</div>"}
                                </p>
                            </button>
                        </div>
                        <p className='sectionDescription'>So you can apply your custom style in a form of an array of classes:</p>
                        <div className='codeWrapper'>
                            <p className='comment'># you can even add your custom markup (like the &apos;bold&apos; class below)</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Snackbar(`Your account has been <a class='bold'>removed!</a>`,{
                                        position: 'bottom-center',
                                        style: {
                                            container: [
                                                ['background-color', 'red'],
                                                ['border-radius', '5px']
                                            ],
                                            message: [
                                                ['color', '#eee']
                                            ],
                                            bold: [
                                                ['font-weight', 'bold']
                                            ],
                                            actionButton: [
                                                ['color', 'white']
                                            ]
                                        },
                                        actionText: 'Undo'
                                    });
                                }}>
                                <p>
                                    {"Snackbar(`Your account has been "}<span>{"<a class='bold'>"}</span>{"removed!"}<span>{"</a>"}</span>{"`, { "}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"position: 'bottom-center',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"actionText: 'Undo',"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"style: {"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"container: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['background-color', 'red'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['border-radius', '5px']"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"message: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['color', '#eee'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"bold: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['font-weight', 'bold'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"actionButton: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['color', 'white'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* timing */}
                        <h3 className='sectionName' id='timing'><a href='#timing'># Timing</a></h3>
                        <p className='sectionDescription'>The default timeout for hiding is 4 seconds but you can customize it with the timeout parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`Give me a second please...`, { timeout: 1000 })}>
                                <p>
                                    {"Snackbar(`Give me a second please...`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"timeout: 1000"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># Notice: when the waitForEvent is set to true(which is the default value), if an event happens after the timeout value after creating the Snackbar, the timeout value divides by two.</p>
                            <p className='comment'># For example, if the timeout value is 4 seconds and an event happens 3 seconds after the snackbar is created, 4 seconds later the hide animation starts, but if that event happens 5 seconds after the snackbar is created, the hide animation starts in 2 seconds.</p>
                        </div>
                        <p className='sectionDescription'>Or you can set the timeout to zero so the auto-hide would be disabled (click on the action button automatically will hide it)</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => Snackbar(`I'm not going anywhere!`, { timeout: 0, actionText: 'Hide' })}>
                                <p>
                                    {"Snackbar(`I'm not going anywhere!`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"timeout: 0,"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"actionText: 'Hide'"}<br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        <p className='sectionDescription'>You can also call the hide() function manually:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    if(SB === null)
                                        SB = Snackbar(`Ha ha! you don't have the action button this time!`, { timeout: 0 });
                                }}>
                                <p>
                                    {"let sb = Snackbar(`Ha ha! you don't have the action button this time!`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"timeout: 0"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># click to hide</p>
                            <button className='codeSection executable'
                                onClick={() => {SB?.hide(); SB = null;}}>
                                <p><span>{"sb.hide();"}</span></p><br></br>
                            </button>
                        </div>

                        {/* wait-for-event */}
                        <h3 className='sectionName' id='wait-for-event'><a href='#wait-for-event'># Wait For Event</a></h3>
                        <p className='sectionDescription'>By default, a snackbar waits for an event to hide, but if your message is not that important, you can disable this feature with the waitForEvent parameter:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    setTimeout(() => {
                                        Snackbar(`I'm not waiting for you!`, { waitForEvent: false });
                                    }, 100);
                                }}>
                                <p>
                                    {"Snackbar(`I'm not waiting for you!`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"waitForEvent: false"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* update on fly */}
                        <h3 className='sectionName' id='update-on-fly'><a href='#update-on-fly'># Update On Fly</a></h3>
                        <p className='sectionDescription'>If you store the returned object from the Snackbar() function, you can set some of its attributes after its created:</p>
                        <div className='codeWrapper'>
                            
                            <p className='comment'># create a simple snackbar</p>
                            <button className='codeSection executable'
                                onClick={() => {if(SB === null) SB = Snackbar(`I'm a simple snackbar`, { timeout: 0 });}}>
                                <p>{"let "}<span>sb</span>{" = Snackbar(`I'm a simple snackbar`), { timeout: 0 });"}</p>
                            </button>

                            <p className='comment'># update the text</p>
                            <button className='codeSection executable'
                                onClick={() => SB?.setMessage('I can change my massage')}>
                                <p>{"sb."}<span>{"setMessage"}</span>{"('I can change my massage');"}</p><br></br>
                            </button>

                            <p className='comment'># change the position</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    SB?.setMessage('Or change my position!');
                                    SB?.setPosition('top-left');
                                }}>
                                <p>{"sb."}<span>{"setPosition"}</span>{"('top-left');"}</p><br></br>
                            </button>

                            <p className='comment'># add an icon</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    SB?.setMessage('And add an icon');
                                    SB?.setIconSrc(loadingIcon.src);
                                }}>
                                <p>{"sb."}<span>{"setIconSrc"}</span>{"( loadingIcon.src );"}</p><br></br>
                            </button>

                            <p className='comment'># change the theme</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    SB?.setMessage('Or change my theme');
                                    SB?.setTheme('light');
                                }}>
                                <p>{"sb."}<span>{"setTheme"}</span>{"('light');"}</p><br></br>
                            </button>

                            <p className='comment'># change the style</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    SB?.setMessage('Even my style!');
                                    SB?.setStyle({
                                        container: [['background-color', '#072']],
                                        message: [['color', '#fd0']]
                                    });
                                }}>
                                <p>
                                    {"sb."}<span>{"setStyle"}</span>{"({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"container: [['background-color', '#072']],"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"message: [['color', '#fd0']],"}<br></br>
                                    {"});"}
                                </p>
                            </button>

                            <p className='comment'># and hide</p>
                            <button className='codeSection executable'
                                onClick={() => {SB?.hide(); SB = null;}}>
                                <p>sb.<span>hide();</span></p>
                            </button>

                        </div>

                        {/* after hide */}
                        <h3 className='sectionName' id='after-hide'><a href='#after-hide'># After Hide</a></h3>
                        <p className='sectionDescription'>When the waitForEvent is set to true(which is the default value), the hide function is waiting for an event to start hiding timeout, so it may not occur exactly after the specified timeout after snackbar creation, so if you want to run a function after your snackbar hides, you can use the afterHide parameter for it:</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Snackbar('Marco...', {
                                        afterHide: () => Snackbar('Polo!')
                                    });
                                }}>
                                <p>
                                    {"Snackbar('Marco...'), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"afterHide"}</span>{": () => Snackbar('Polo!')"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

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