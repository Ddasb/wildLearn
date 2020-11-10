import React from 'react';
import blank_profile from './../../blank-profile-picture-female.png';
import './Wilder.css';

import Skill from '../skill/Skill';
import { UlSkill } from '../../styledComponents/UlSkill';

type SkillType = {
    title: string;
    votes: number;
};

type WilderProps = {
    identity: any;
    skills: any;
};

function Wilder({ identity, skills }: WilderProps): React.ReactElement {
    return (
        <article className="card">
            <img src={blank_profile} alt="Jane Doe Profile" />
            <h3>{identity.name + ' ' + identity.firstName}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <UlSkill>
                {skills.map(({ title, votes }: SkillType, index: number) => (
                    <Skill name={title} votes={votes} key={index} />
                ))}
            </UlSkill>
        </article>
    );
}

export default Wilder;
