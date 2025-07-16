


import type { ProjectModel } from '~/types';
import type { Route } from './+types/index'
import ProjectCard from '~/components/ProjectCard';

export async function loader({request}: Route.LoaderArgs): Promise<{ projects: ProjectModel[]}> {
  
  const res = await fetch('http://localhost:5000/projects')
  const data = await res.json();
  console.log('loader function',data)
  return { projects : data}
}

const  ProjectListPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } =  loaderData as { projects : ProjectModel[]}
  console.log('Project Page runnning')
  console.log('ProjectsPage',projects)
  return (
    <>
      <h2 className="text-3xl font-semibold text-white mb-2 ">Projects</h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) =>(
          <ProjectCard key={project.id} project={project} />
        ))}
      

      </div>
    </>
  )
}

export default ProjectListPage