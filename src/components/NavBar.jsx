import { signIn } from "next-auth/react";
import Avatar from "./Avatar";
function NavBar({ user, loading }) {
  return (
    <nav className="flex items-center justify-between py-5 px-14 select-none">
      {/* Left */}
      <div>
        <p className="text-white font-logo font-bold text-3xl uppercase hover:scale-125 transition ">
          Next.js
        </p>
      </div>
      {/*  Center */}
      {/*  Right */}
      <div className="flex items-center justify-center space-x-2">
        <a
          href="https://github.com/Hyuuh/next"
          target={`_blank`}
          className="text-white hover:text-black hover:bg-white rounded-full py-2 px-4 transition"
        >
          GitHub
        </a>
        {/* Not work tf class active*/}
        {user && loading !== "loading" && <Avatar user={user} />}
        {!user && loading !== "loading" && (
          <button
            className="text-black rounded-full bg-white py-2 px-4"
            onClick={() => signIn("github")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
