import bgImage from '../../assets/react.svg'
// import bgPrincipal from '../../assets/bgprincipal.png'
import './header.css'
const Header = () => {
    return (
        <div className="header__class">
            <div className="backgraund__image">
                imagen de fondo
                <img src='' alt="" />
            </div>
            <div className='personalInfo'>
                <div className="profile__image">
                    <img src={bgImage} alt="" />
                </div>
                <div className='name'> Uriel Martinez </div>
                <div className='jobDescription'> <span>Software developer</span></div>
            </div>
        </div>
    )
}

export default Header;