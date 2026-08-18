import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className=" max-w-6xl mx-auto px-4 py-3 flex justify-between ">
          <Link to={"/"} className=" text-xl font-bold text-brand-600 ">
            🍳 Recipe Finder
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-text-secondary hover:text-brand-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="text-sm font-medium text-text-secondary hover:text-brand-600 transition-colors"
            >
              Favorites
            </Link>
          </nav>
        </div>
      </header>
      <main className=" max-w-6xl mx-auto px-4 py-8 flex-1">
        <Outlet />
      </main>
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 mt-auto">
        <p>&copy; 2026 X Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
