import "./topbar.css";

export default function Topbar() {
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className=" topIcon fab fa-facebook-messenger"></i>
          <i className="topIcon fab fa-twitter"></i>
          <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://i.insider.com/5dc098e0d8d84605b9674ef9?width=1000&format=jpeg&auto=webp"
            alt="rahul"
          />
          <i className="topsIcon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
