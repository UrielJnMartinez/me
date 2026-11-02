import bgImage from '../../assets/uriel2.jpg'
import './header.css'
const Header = () => {
    return (
        <header className="header-class">
            <div className='personal-info'>
                <div className="profile-image">
                    <img src={bgImage} alt="Retrato de Uriel Martínez" />
                </div>
                <div className="biography">
                    <p className='eyebrow'> Culiacán, Sinaloa</p>
                    <h1 className='name'>Uriel Martínez</h1>
                    <p className='jobDescription'>Líder Técnico · Coppel</p>
                    <div className="currenLocation">
                        <span className='currentCity'>Desarrollador de software</span>
                        <span className='currentWorkCompany'>“Aprendiendo algo nuevo, todos los días”</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;