import './index.scss'
import vercel from'./vercel.png'
import watch from'./watch.png'

const Portfolio = () => {
    return(
       <div className="portfolioContainer">
            <div className="portfolioProject">
            <img src={vercel} alt="galaxy effect" className="portfolioIMG" />
                <div className="portfolioInfo">
                    <h1> FUN 3D RENDER </h1>
                    <ul className="portfolioList">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <div className="portfolioBottom">
                <a href="https://github.com/ColinAndrewThompson/3D-lettering" className="portfolioLinks"> GITHUB </a>
                <a href="https://colin-thompson.vercel.app/" className="portfolioLinks"> DEPLOYED </a>
                </div>
                </div>
            </div>


            <div className="portfolioProject">
            <img src={watch} alt="galaxy effect" className="portfolioIMG" />
                <div className="portfolioInfo">
                <h1> PURE CSS WATCH </h1>
                <ul className="portfolioList">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <div className="portfolioBottom">
                    <a href="https://github.com/ColinAndrewThompson/CSS-Watch" className="portfolioLinks"> GITHUB </a>
                    <a href="https://colinandrewthompson.github.io/CSS-Watch/" className="portfolioLinks"> DEPLOYED </a>
                    </div>
                
                </div>
            </div>

            {/* <div className="portfolioProject">
            <img src={watch} alt="galaxy effect" className="portfolioIMG" />
                <div className="portfolioInfo">
                <h1> PURE CSS WATCH </h1>
                <ul className="portfolioList">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <div className="portfolioBottom">
                    <a href="https://github.com/ColinAndrewThompson/CSS-Watch" className="portfolioLinks"> GITHUB </a>
                    <a href="https://colinandrewthompson.github.io/CSS-Watch/" className="portfolioLinks"> DEPLOYED </a>
                    </div>
                
                </div>
            </div>

            <div className="portfolioProject">
            <img src={watch} alt="galaxy effect" className="portfolioIMG" />
                <div className="portfolioInfo">
                <h1> PURE CSS WATCH </h1>
                <ul className="portfolioList">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <div className="portfolioBottom">
                    <a href="https://github.com/ColinAndrewThompson/CSS-Watch" className="portfolioLinks"> GITHUB </a>
                    <a href="https://colinandrewthompson.github.io/CSS-Watch/" className="portfolioLinks"> DEPLOYED </a>
                    </div>
                
                </div>
            </div>

            <div className="portfolioProject">
            <img src={watch} alt="galaxy effect" className="portfolioIMG" />
                <div className="portfolioInfo">
                <h1> PURE CSS WATCH </h1>
                <ul className="portfolioList">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
                <div className="portfolioBottom">
                    <a href="https://github.com/ColinAndrewThompson/CSS-Watch" className="portfolioLinks"> GITHUB </a>
                    <a href="https://colinandrewthompson.github.io/CSS-Watch/" className="portfolioLinks"> DEPLOYED </a>
                    </div>
                
                </div>
            </div> */}

       </div> 
    )
}

export default Portfolio