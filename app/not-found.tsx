import Link from "next/link";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { site } from "../constants/content";

export default function NotFound() {
  return <><Navbar /><main className="not-found"><p className="eyebrow">404 / Not found</p><h1>This page took<br /><span>a different path.</span></h1><p>The page you’re looking for isn’t here. Let’s get you back to the work that matters.</p><Link href="/" className="button button-primary">Back to {site.name}</Link></main><Footer /></>;
}
