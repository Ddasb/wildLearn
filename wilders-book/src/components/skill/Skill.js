import propTypes from 'prop-types';
import { Badge } from '../../styledComponents/Badge';
import { LiSkill } from '../../styledComponents/LiSkill';


function skill({name, votes}) {
    return (
        <LiSkill>
            {name} <Badge votes={votes}>{votes}</Badge>
        </LiSkill>
    )
}

skill.propTypes = {
    name: propTypes.string.isRequired,
    votes: propTypes.number.isRequired
}

export default skill;