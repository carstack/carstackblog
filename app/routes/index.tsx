import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Carstack Blog</h1>
      <h3>Recent Blogs</h3>
      <div>
        <Link to="blogs/why-used-cars-are-expensive">Why Used Cars Are Expensive All Of A Sudden ?</Link>
      </div>
    </div>
  );
}
