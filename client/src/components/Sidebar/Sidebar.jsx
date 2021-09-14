import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
  const [cats,setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])
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
      {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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
