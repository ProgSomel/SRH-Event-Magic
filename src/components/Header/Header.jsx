import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-end gap-3">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://media.licdn.com/dms/image/D5603AQGaIXLnPtBtaQ/profile-displayphoto-shrink_800_800/0/1674055812932?e=2147483647&v=beta&t=mlsNDLmsaK-6Szjw0JqzhbfZKTEkFmaFidAsaTNp8GY" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-sm  btn-ghost">User name</button>
            </li>
            <li>
              <button className="btn btn-sm  btn-ghost">Logout</button>
            </li>
          </ul>
        </div>
        <button className="btn">Login</button>
      </div>

      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;
