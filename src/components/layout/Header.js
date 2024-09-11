
/**
 * Header Component
 */
const Header = () => {

  /** Show/Hide the Sidebar */
  const toggleSidebar=()=>{
      var body=document.getElementsByTagName('body');
      var list=body[0].classList;
      if(list.contains('toggle-sidebar')){
        list.remove('toggle-sidebar')
      }else{
        list.add('toggle-sidebar')
      }
  }
    return (
     <>
     <header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="index.html" className="logo d-flex align-items-center">
    {/* <img src="assets/img/logo.png" alt="" /> */}
    <span className="d-none d-lg-block">Admin</span>
  </a>
  <i onClick={toggleSidebar} className="bi bi-list toggle-sidebar-btn"></i>
</div>

<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">

    <li className="nav-item dropdown pe-3">
      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="!#" data-bs-toggle="dropdown">
        {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
        <span className="d-none d-md-block dropdown-toggle ps-2">ADMIN</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        {/* <li className="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li> 
    <li><hr className="dropdown-divider" /></li>*/}

        <li>
          <a className="dropdown-item d-flex align-items-center" href="!#">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li><hr className="dropdown-divider" /></li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="!#">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li><hr className="dropdown-divider" /></li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="!#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>

  </ul>
</nav>

</header>

     </>
  );
}

export default Header;