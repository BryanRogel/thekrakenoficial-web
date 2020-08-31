
export default function SocialMediaLinks() {
    return(
        <>
            <a href="#" className="icon-button facebook"><i className="fa fa-facebook" target="_blank"/><span/></a>
            <a href="https://twitter.com/TheKraken3vs3?s=09" className="icon-button twitter" target="_blank"><i className="fa fa-twitter"/><span/></a>
            <a href="https://www.youtube.com/c/TheKrakenOficialVainglory" className="icon-button youtube" target="_blank"><i className="fa fa-youtube"/><span/></a>
            <a href="https://www.twitch.tv/Thekrakenvg" className="icon-button twitch"target="_blank" ><i className="fa fa-twitch"/><span/></a>
            <a href="https://discord.com/invite/EspNAMR" className="icon-button discord" target="_blank"><i className="fa fa-discord"/><span/></a>
            <style jsx>{`
                html {
                    font-size: 2.5em;
                }
                body {
                    background-color: transparent;
                    padding: 25px;
                    text-align: center;
                }
                /* Wrapper */
                .icon-button {
                    background-color: transparent;
                    border-radius: 2.6rem;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1.3rem;
                    height: 2.6rem;
                    line-height: 2.6rem;
                    margin: 0 5px;
                    position: relative;
                    text-align: center;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                        -ms-user-select: none;
                            user-select: none;
                    width: 2.6rem;
                }
                /* Circle */
                .icon-button span {
                    border-radius: 0;
                    display: block;
                    height: 0;
                    left: 50%;
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                        -o-transition: all 0.3s;
                            transition: all 0.3s;
                    width: 0;
                }
                .icon-button:hover span {
                    width: 2.6rem;
                    height: 2.6rem;
                    border-radius: 2.6rem;
                    margin: -1.3rem;
                }
                /* Icons */
                .icon-button i {
                    background: none;
                    color: white;
                    height: 2.6rem;
                    left: 0;
                    line-height: 2.6rem;
                    position: absolute;
                    top: 0;
                    -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                        -o-transition: all 0.3s;
                            transition: all 0.3s;
                    width: 2.6rem;
                    z-index: 10;
                }
                .twitter span {
                    background-color: #4099ff;
                }
                .facebook span {
                    background-color: #3B5998;
                }
                .instagram span {
                    background-color: #db5a3c;
                }
                .twitch span {
                    background-color: #6441a5;
                }
                .instagram span {
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                }
                .youtube span {
                    background-color: #c4302b ;
                }
                .discord span {
                    background-color: #7289DA;
                }
                .icon-button .fa-twitter {
                    color: #4099ff;
                }
                .icon-button .fa-facebook {
                    color: #3B5998;
                }
                .icon-button .fa-twitch {
                    color: #6441a5;
                }
                .icon-button .icon-instagram {
                    color: #db5a3c;
                }
                .icon-button .fa-instagram {
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent;
                -moz-text-fill-color: transparent;
                }
                .icon-button .fa-youtube {
                    color: #c4302b ;
                }
                .icon-button .fa-discord {
                    color: #7289DA;
                }
                .icon-button:hover .fa-twitter,
                .icon-button:hover .fa-facebook,
                .icon-button:hover .fa-twitch,
                .icon-button:hover .fa-youtube,
                .icon-button:hover .fa-discord {
                    color: white;
                }
                .icon-button:hover .icon-instagram, 
                .icon-button:hover .fa-instagram {
                    background: white;
                    -webkit-background-clip: text;
                    -moz-background-clip: text;
                }
                @media all and (max-width: 680px) {
                .icon-button {
                    border-radius: 1.6rem;
                    font-size: 0.8rem;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    width: 1.6rem;
                }
                .icon-button:hover span {
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 1.6rem;
                    margin: -0.8rem;
                }
                /* Icons */
                .icon-button i {
                    height: 1.6rem;
                    line-height: 1.6rem;
                    width: 1.6rem;
                }
                body {
                    padding: 10px;
                }
                .pinterest {
                display: none; 
                }
                }
                `}
        </style>
        </>
    )
}
