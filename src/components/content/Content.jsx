import './Content.css'

export default function Content() {
    return(
        <div className="content">
            <div className="top">
                <h3>Laura Smith</h3>
                <h4>Frontend developer</h4>
                <h5>laurasmith.website</h5>
            </div>

            <div className="middle-buttons">
                <button className="email"><i class="fa fa-envelope"></i> Email</button>
                <button className="social"><i class="fa fa-linkedin-square"></i> Linkedin</button>
            </div>

            <div className="bottom">
                <h4>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4 className='section-2'>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>   
    )
}