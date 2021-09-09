import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        className="sidebarImg"
        src="https://cdn.pixabay.com/photo/2021/08/22/15/39/kid-6565461__340.jpg"
        alt="profile"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
        ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consequuntur, blanditiis?
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className=" sidebarIcon fab fa-facebook-messenger"></i>
        <i className="sidebarIcon fab fa-twitter"></i>
        <i className="sidebarIcon fab fa-instagram"></i>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
