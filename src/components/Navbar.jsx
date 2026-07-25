"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-8">
      {/* Left */}
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          📚 Next Library
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/books">All Books</Link>
          </li>

          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;