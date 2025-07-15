
import type { Route } from "./+types/index"; // Uncomment if you need Route for runtime usage
 // Uncomment if you need Route for runtime usage




export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Developer | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      Home Page
    </>
  );
}
