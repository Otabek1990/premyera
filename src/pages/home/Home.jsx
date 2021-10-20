import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const uzbMovies = useSelector((state) => state.uzbekMovies.uzbMovies);
  const uzbSerials = useSelector((state) => state.uzbekSerials.uzbSerials);
  const kidsMovies = useSelector((state) => state.kidsMovies.kidsMovies);
  const foreignMovies = useSelector(
    (state) => state.foreignMovies.foreignMovies
  );
  const uzbKonserts = useSelector((state) => state.uzbKonserts.uzbKonserts);

  // useEffect(() => {
  //   const getRandomLists = async () => {
  //     try {
  //       const res = await axios.get(
  //         `lists${type ? "?type=" + type : ""}${
  //           genre ? "&genre=" + genre : ""
  //         }`,
  //         {
  //           headers: {
  //             token:
  //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         }
  //       );
  //       setLists(res.data);
  //       console.log(res.data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomLists();
  // }, [type, genre]);
  return (
    <div className="home">
      <div style={{height:"300px"}}>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      </div>
      <div style={{marginTop:"120px"}}>
      <List genre={"Uzbekcha filmlar"} items={uzbMovies} />
      <List genre={"Uzbekcha seriallar"} items={uzbSerials} />
      <List genre={"Bollar uchun filmlar"} items={kidsMovies} />
      <List genre={"Chet el seriallari"} items={foreignMovies} />
      <List genre={"Konsertlar"} items={uzbKonserts} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
