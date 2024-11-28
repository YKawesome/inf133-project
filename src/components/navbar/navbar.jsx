function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="">
        <a href="/Portfolio" className="btn btn-ghost text-xl">
          [Unnamed]
        </a>
      </div>
      <div className="avatar flex-1">
        <div className="w-10 rounded-full"></div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href className="hovergrow">
              Temp
            </a>
          </li>
          <li>
            <a href className="hovergrow">
              Temp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
