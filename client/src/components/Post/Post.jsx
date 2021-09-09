import field from "../../assets/field.jpg";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={field} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in fuga
        nulla voluptatum aliquid sint odit mollitia fugiat beatae! Explicabo
        numquam debitis vel, esse natus corporis error officia repudiandae.
        Amet!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in fuga
        nulla voluptatum aliquid sint odit mollitia fugiat beatae! Explicabo
        numquam debitis vel, esse natus corporis error officia repudiandae.
        Amet!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in fuga
        nulla voluptatum aliquid sint odit mollitia fugiat beatae! Explicabo
        numquam debitis vel, esse natus corporis error officia repudiandae.
        Amet!
      </p>
    </div>
  );
}
