import { Link} from "@remix-run/react";
export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="">Recent Blogs</h3>
      <div className="">
        <Link to="blogs/delorean-alpha">What is Delorean Alpha 5 ?</Link>
      </div>
    </div>
  );
}
