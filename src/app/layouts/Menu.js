import { Link } from 'react-router-dom'
import {  FaAddressCard, FaAngleLeft,FaNewspaper} from 'react-icons/fa'
function Menu() {
  return (

   <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="index3.html" className="brand-link">
    <img src={"dist/img/AdminLTELogo.png"} alt="Admin Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Well Admin Panel</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={"dist/img/user2-160x160.jpg"} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to="#" className="d-block">Alexander Pierce</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <Link to="/" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas" ><FaAngleLeft /></i>
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </Link>
            </li>

          </ul>
        </li>

        <li className="nav-item">
          <Link to="/contactsheets" className="nav-link">
            <i className="nav-icon fas" >
            <FaAddressCard/>
            </i>
            <p>
             ContactSheet
             <i className="right fas" ><FaAngleLeft /></i>
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/contactsheets/add" className="nav-link active">
                <i className="far  nav-icon" ><FaNewspaper/></i>
                <p>Add Contact</p>
              </Link>
            </li>

          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

  )
}

export default Menu
