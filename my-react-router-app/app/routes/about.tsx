import AboutUs from "~/aboutUs/aboutUs";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "This is the About page of the application." },
  ];
}

export default function About() {
  return <AboutUs />;
}