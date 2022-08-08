import './index.scss'
import ColinResume from '../pdf/ColinResume.pdf'

const About = () => {
    return(
       <div className="aboutContainer"> 
        <h1>Hi there!</h1>
        <hr></hr>
        <p>My name is Colin Thompson, I am a full stack web developer with an affinity for front end design.</p>
        <p>My journey into tech began during the pandemic when my aunt asked me to update her company’s website despite me not having any experience in the field. With a combination of google and trial and error the website was brought from 2010 to 2021. This started a passion.</p>
        <p>In April of 2022 I left my established career in operations management to pursue a coding bootcamp and grow my understanding as a developer. At the bootcamp I fell in love with the agile development cycle, and tweeking projects along the way.</p>
        <p>I am currently looking for opportunites to grow in the field and learn new things!</p>
        <p>My email is colinthompson1996@gmail.com if you are looking to contact me!</p>
        <hr/>
        <br/>
        <a href={ColinResume} className="aboutResumeDownload" download> DOWNLOAD RESUME </a>
       </div> 
       
    )
}

export default About