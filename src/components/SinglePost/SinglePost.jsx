import "./singlepost.css";
import field from "../../assets/field.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singleWrap">
        <img src={field} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rahul</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          sapiente eveniet modi? Fuga, sit. Facere, rerum ut, delectus officia
          alias beatae minus dicta sed aliquid vero quo voluptatem blanditiis
          quod tenetur necessitatibus tempora velit! Incidunt nostrum molestiae
          deserunt. Cupiditate, voluptates ea sed asperiores commodi suscipit
          dignissimos, eaque sequi explicabo officiis ducimus voluptatum.
          Mollitia itaque dignissimos nobis reprehenderit quae facilis animi
          nesciunt veritatis rem! Quaerat temporibus laudantium ut tempora
          reprehenderit tempore recusandae iste praesentium, architecto quod
          libero consequatur nisi vel voluptatum enim quo alias eveniet ipsum
          saepe labore accusamus. Dolor veniam esse sed nostrum. Obcaecati
          error, tempore magnam facilis aspernatur sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          sapiente eveniet modi? Fuga, sit. Facere, rerum ut, delectus officia
          alias beatae minus dicta sed aliquid vero quo voluptatem blanditiis
          quod tenetur necessitatibus tempora velit! Incidunt nostrum molestiae
          deserunt. Cupiditate, voluptates ea sed asperiores commodi suscipit
          dignissimos, eaque sequi explicabo officiis ducimus voluptatum.
          Mollitia itaque dignissimos nobis reprehenderit quae facilis animi
          nesciunt veritatis rem! Quaerat temporibus laudantium ut tempora
          reprehenderit tempore recusandae iste praesentium, architecto quod
          libero consequatur nisi vel voluptatum enim quo alias eveniet ipsum
          saepe labore accusamus. Dolor veniam esse sed nostrum. Obcaecati
          error, tempore magnam facilis aspernatur sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          sapiente eveniet modi? Fuga, sit. Facere, rerum ut, delectus officia
          alias beatae minus dicta sed aliquid vero quo voluptatem blanditiis
          quod tenetur necessitatibus tempora velit! Incidunt nostrum molestiae
          deserunt. Cupiditate, voluptates ea sed asperiores commodi suscipit
          dignissimos, eaque sequi explicabo officiis ducimus voluptatum.
          Mollitia itaque dignissimos nobis reprehenderit quae facilis animi
          nesciunt veritatis rem! Quaerat temporibus laudantium ut tempora
          reprehenderit tempore recusandae iste praesentium, architecto quod
          libero consequatur nisi vel voluptatum enim quo alias eveniet ipsum
          saepe labore accusamus. Dolor veniam esse sed nostrum. Obcaecati
          error, tempore magnam facilis aspernatur sapiente?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
