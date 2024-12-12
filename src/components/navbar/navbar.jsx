import { supabase } from "../../App";

function Navbar({ user, onLogout }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout Error:", error.message);
    } else {
      onLogout(); 
    }
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div>
        <a href="/Portfolio" className="btn btn-ghost text-xl">
          [Unnamed]
        </a>
      </div>
      <div className="avatar flex-1">
        <div className="w-10 rounded-full"></div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a href className="hovergrow">Temp</a>
          </li>
          <li>
            <a href className="hovergrow">Tasks</a>
          </li> */}
          {user && (
            <li>
              <a className="hovergrow" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;