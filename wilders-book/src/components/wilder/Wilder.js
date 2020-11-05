import blank_profile from "./../../blank-profile-picture-female.png";
import './Wilder.css';

import Skill from "../skill/Skill";
import { UlSkill } from '../../styledComponents/UlSkill';

function Wilder() {
	const skills = [
		{name: "HTML", votes:5},
		{name: "NodeJS", votes:7},
		{name: "React", votes:3},
        {name: "TypeScript", votes:1}
	]

    return (
        <article className="card">
            <img src={blank_profile} alt="Jane Doe Profile" />
            <h3>Jane Doe</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <UlSkill>
                {
                    skills.map(({ name, votes }, index) => <Skill name={name} votes={votes} key={index} />)
                }
            </UlSkill>
        </article>
    )
}

export default Wilder;