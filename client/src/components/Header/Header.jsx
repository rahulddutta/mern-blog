import "./header.css"
import headerflower from "../../assets/headerflower.jpg"

export const Header = () => {
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img src={headerflower} alt="" className="headerImg" />
      </div>
    );
}
