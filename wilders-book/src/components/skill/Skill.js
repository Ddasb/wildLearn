import propTypes from 'prop-types';

function skill({name, votes}) {
    return (
    <li>{name} <span className="votes">{votes}</span></li>
    )
}

skill.propTypes = {
    name: propTypes.string.isRequired,
    votes: propTypes.number.isRequired
}

export default skill;