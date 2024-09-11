import { NavLink } from "react-router-dom";

/**
 * Sidebar Component
 */
const Sidebar = ()=> {
    return (
      <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={'dashboard'}>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'category'}>
                <i className="bi bi-grid"></i>
                <span>Category</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={'product'}>
                <i className="bi bi-grid"></i>
                <span>Product</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                <i className="bi bi-grid"></i>
                <span>Logout</span>
              </a>
            </li>

        </ul>
      </aside>
    );
  }
  
  export default Sidebar;