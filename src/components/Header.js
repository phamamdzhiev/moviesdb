import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="container">
        <nav class="p-4">
          <div class="flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" class="flex items-center">
              <span class="text-white self-center text-xl font-semibold whitespace-nowrap">
                The Movie DB
              </span>
            </Link>
            <div class="justify-between items-center flex w-auto">
              <ul class="flex font-medium space-x-8 mt-0">
                <li>
                  <NavLink to="/" class="block py-2 pr-4 pl-3 rounded">
                    <span className="text-white">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search" class="block py-2 pr-4 pl-3 rounded">
                    <span className="text-white">Search</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
