import { useParams } from 'react-router-dom';

import { projects } from './../helpers/projectlist';


import BtnGitHub from '../components/buttonGitHub/BtnGitHub';
import img from './../img/projects/02-big.jpg';


const Project = () => {

	const { id } = useParams();
	const projectId = projects[id];

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">{projectId.title}</h1>


					<img src={projectId.imgBig} alt={projectId.imgBig} className="project-details__cover" />

					<div className="project-details__desc">
						<p>{projectId.skills}</p>
					</div>

					{projectId.gitHubLink && (
						<BtnGitHub link='https://github.com' />
					)}

				</div>
			</div>
		</main>
	);
}

export default Project;