import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-transparent z-10">
      <div className="flex justify-between items-center px-6 py-3">
        {/* App Title */}
        <div className="text-3xl font-thin text-purple-500">
          <Link to="/">Eventio</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 text-white items-center text-sm">
          <Link to="/documentation" className="hover:text-purple-500">
            Documentation
          </Link>
          <Link to="/" className="hover:text-purple-500">
            Blog
          </Link>
          <div className="hover:text-purple-500">
            <a href="https://eventio-privacy-policy.vercel.app/">
           
            Privacy Policy
            </a>
          </div>
          <Link to="/" className="text-black rounded-xl hover:text-purple-600 p-2 bg-white">
            Get the App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
