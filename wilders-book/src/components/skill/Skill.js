function skill({name, votes}) {
    return (
    <li>{name} <span className="votes">{votes}</span></li>
    )
}

export default skill;