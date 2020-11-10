import React from 'react';
import { Badge } from '../../styledComponents/Badge';
import { LiSkill } from '../../styledComponents/LiSkill';

type SkillProps = {
    name: string;
    votes: number;
};

function Skill({ name, votes }: SkillProps): React.ReactElement {
    return (
        <LiSkill>
            {name} <Badge votes={votes}>{votes}</Badge>
        </LiSkill>
    );
}

export default Skill;
