import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/staff-forecaster"
                  style={{ textDecoration: "none" }}
                >
                  Staff Forecaster
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <style jsx>{`
        .nav-link:hover {
          background-color: skyblue;
        }
      `}</style>
    </>
  );
};

export default Layout;
