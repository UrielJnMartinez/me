
import './contact.css'

type ContactProps = {
    href: string
    label: string
}

const Contact = ({ href, label }: ContactProps) => {
    return (
        <li className="contact">
            <a href={href}>{label}</a>
        </li>
    )
}
export default Contact;