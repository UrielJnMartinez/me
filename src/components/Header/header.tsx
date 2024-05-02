import bgImage from '../../assets/uriel.jpeg'
// import bgPrincipal from '../../assets/bgprincipal.png'
import './header.css'
const Header = () => {
    return (
        <div className="header-class">
            <div className="backgraund-image">
                {/* <img src={bgPrincipal} alt="" /> */}
            </div>
            <div className='personal-info'>
                <div className="profile-image">
                    <img src={bgImage} alt="" />
                </div>
                <div className="biography">
                    <div className='name'> Uriel Martinez </div>
                    <div className='jobDescription'> <span>Software developer</span></div>
                    <div className="currenLocation">
                        <span className='currentCity'>Culiacan, Sin. Mexico</span>
                        <span className='currentWorkCompany'>Coppel</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;