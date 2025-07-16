import type { Route } from "./+types/details";
import type { ProjectModel } from "~/types";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<ProjectModel> {
  const id = params.projectId;
  console.log("Fetching project details for ID:", id);

  const res = await fetch(`http://localhost:5000/projects/${id}`);
  if (!res.ok) {
    throw new Response("Failed to fetch project details", {
      status: res.status,
    });
  }
  const project: ProjectModel = await res.json();
  return project;
}

export function HydrateFallBack() {
  return <div>Loading...</div>;
}

export default function ProjectDetailsPage({
  loaderData,
}: Route.ComponentProps) {
  const project = loaderData;

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-color-600 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start mb-4">
        <div >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-400 mb-4 ">
            {project.title}
          </div>
          <p className="text-gray-300 text-sm m-4">
            { new Date(project.date).toLocaleDateString()} - {project.category}
          </p>
          <p className="text-gray-200 mb-6">
            {project.description}
          </p>
          <a href={project.url} target='_blank' className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded tranistion">
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
}
