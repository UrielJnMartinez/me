
import './pillBadges.css'

type PillBadgesProps = {
    label: string
}

const PillBadges = ({ label }: PillBadgesProps) => {
    return (
        <li className="pill-item">
            <span className='pill-description'>{label}</span>
        </li>
    )
}

export default PillBadges;