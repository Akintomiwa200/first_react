import './Contact.css'

function Contact() {
    return(
        <>
             <div className="contact">
        <h4 id="cont">C<span id="sag">ontact M</span>e</h4>
        <h5 id="dont">Dont be shy! I love meeting new people.</h5>
        <div id="babd">
            <i className="fa fa-message" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <button type="button" id="viewss"> View My Resume</button>
        </div>
    </div>

    <div id="getintough">
        <h2>GET IN<span id="sag"> T</span>OUCH</h2>

        <div id="lol">
            <div id="m"><i className="fa fa-map-marker" aria-hidden="true"></i>
                <p id="bling"> Lagos, Nigeria.</p>
            </div>
            <div id="m"><i className="fa fa-phone" aria-hidden="true"></i>
                <p id="bling">Tel +2348145328795</p>
                <p id="bling">Mob +234911309083</p>
                
            </div>
            <div id="m"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p id="bling">herkintormiwer@gmail.com</p>
                <p id="bling">herkintormiwer@icloud.com</p>
                <p id="bling">akintomiwa.o@yahoo.com</p>
            </div>
        </div>
    </div>


        </>
    )
}
export default Contact