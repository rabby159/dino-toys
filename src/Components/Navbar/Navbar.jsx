import { Link, NavLink } from "react-router-dom";
import { FaSistrix, FaCartPlus } from "react-icons/fa6";

const Navbar = () => {

    const navLink = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/allToys'}>All Toys</NavLink></li>
            <li><NavLink to={'/myToys'}>My Toys</NavLink></li>
            <li><NavLink to={'/addToys'}>Add Toys</NavLink></li>
            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
            
        </>
    )

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="normal-case text-3xl font-bold">Dino <span className="bg-green-600 p-1 rounded-3xl text-amber-50">Toys</span></a>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end text-2xl">
          <Link><FaSistrix></FaSistrix></Link>
          <Link className="mx-5"><FaCartPlus></FaCartPlus></Link>
          <Link to='/login'>
            <button className="btn btn-info md:btn-success">Login</button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
