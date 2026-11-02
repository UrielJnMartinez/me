
import './footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <span>© {new Date().getFullYear()} Uriel Martínez</span>
            <span>Hecho en México</span>
        </footer>
    )
}

export default Footer