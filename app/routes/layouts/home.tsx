import { Outlet } from "react-router";
import Hero from "~/components/Hero";

export default function HomeLayout() {
  return (
    <>
      <Hero
        name="Ken"
        text="I'm a software engineer specializing in business automation."
      />
      <section className="max-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
}
