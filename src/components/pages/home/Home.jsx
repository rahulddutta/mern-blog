import { Data } from "../../Data/Data";
import { Header } from "../../Header/Header";
import { Sidebar } from "../../Sidebar/Sidebar";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
          <Data/>
          <Sidebar/>
      </div>
    </>
  );
};
