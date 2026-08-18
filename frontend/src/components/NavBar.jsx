import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const navClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-green-700 font-semibold"
        : "text-gray-600 hover:text-green-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white shadow-sm">
            🐄
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              CattleEye
            </h1>

            <p className="hidden text-[10px] font-medium uppercase tracking-widest text-gray-400 sm:block">
              AI Cattle Intelligence
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/history" className={navClass}>
            History
          </NavLink>

          <NavLink to="/analytics" className={navClass}>
            Analytics
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-300 hover:text-green-700 sm:block">
            About
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white shadow-sm transition hover:bg-green-800">
            GS
          </button>
        </div>

      </div>
    </header>
  );
}


// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   const navLink = (path) =>
//     `px-4 py-2 rounded-lg transition ${
//       location.pathname === path
//         ? "text-green-600 font-semibold"
//         : "text-gray-600 hover:text-green-600"
//     }`;

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

//         <Link
//           to="/"
//           className="text-3xl font-bold text-green-600"
//         >
//           🐄 CattleEye
//         </Link>

//         <nav className="flex items-center gap-6">
//           <Link to="/" className={navLink("/")}>
//             Home
//           </Link>

//           <Link to="/history" className={navLink("/history")}>
//             History
//           </Link>

//           <Link to="/store" className={navLink("/store")}>
//             Store
//           </Link>
//         </nav>

//       </div>
//     </header>
//   );
// }