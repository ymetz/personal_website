import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						I am a {personalInfo.about.year} PhD student at the {personalInfo.about.department.name}
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
						advised by <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}. </ExtLink>
						 <br/><a className = "text-sm">✉️ {personalInfo.about.email}</a>
					</p>
					<p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
					<p className = "text-sm text-gray-600">
					I do research on Human-AI Communication, combining reinforcement learning from human feedback, interactive visualizations for explainability, and uncertainty in RL. 
					My main research aim is the improvement of bi-directional communication between humans and AI agents for effective learning and alignment. 
					Right now, I focus on the use of rich and diverse human feedback for RLHF.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
