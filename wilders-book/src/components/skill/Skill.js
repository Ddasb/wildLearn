import propTypes from 'prop-types';

import { Badge } from '../../styledComponents/Badge';
import { LiSkill } from '../../styledComponents/LiSkill';


export const Skill = ({name, votes}) => {
    return (
        <LiSkill>
            {name} <Badge votes={votes}>{votes}</Badge>
        </LiSkill>
    )
}

Skill.propTypes = {
    name: propTypes.string.isRequired,
    votes: propTypes.number.isRequired
}