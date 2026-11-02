import './workItem.css'

type WorkItemProps = {
    role: string
    company: string
    period: string
    location: string
    summary: string
}

const WorkItem = ({ role, company, period, location, summary }: WorkItemProps) => {
    return (
        <article className="work-item">
            <h3 className="title-job">{role}</h3>
            <p className="work-info">
                <span className="work-name">{company}</span>
                <span className="timelapse">{period}</span>
                <span>{location}</span>
            </p>
            <p className="work-details">{summary}</p>
        </article>
    )
}

export default WorkItem;