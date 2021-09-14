import { useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { Posts } from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";


export const Home = () => {
  const [posts, setPost] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      console.log(res)
      setPost(res.data)
    }
    fetchPosts();
  },[search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};
