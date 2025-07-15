import { Outlet } from "react-router";


export default function HomeLayout() {
  return (
    <>
      <section className="max-6xl mx-auto px-6 my-8 bg-gray-900">
        <Outlet />
      </section>
    </>
  );
}
