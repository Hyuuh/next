function NavBar() {
  return (
    <nav className="flex items-center justify-between py-5 px-14 select-none">
      {/* Left */}
      <div>
        <p className="text-white font-logo font-bold text-3xl">Test</p>
      </div>
      {/*  Center */}
      {/*  Right */}
      <div className="flex items-center justify-center space-x-2">
        <a
          href="https://github.com/Hyuuh/next"
          className="text-white hover:text-black hover:bg-white rounded-full py-2 px-4"
        >
          GitHub
        </a>
        {/* Not work tf class active*/}
        <a href="#" className="text-black rounded-full bg-white py-2 px-4">Login</a>
      </div>
    </nav>
  );
}

export default NavBar;
