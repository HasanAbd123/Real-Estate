import SearchBar from "../../components/searchbar/SearchBar";
import "./homepage.scss";
import im2 from "../../assets/images/hom/im2.jpg";
function Homepage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream place</h1>
          <p>
            ldskfnjlsanfjnvjkfvbjfknmdnms,dmc vn vnf vn xnzv,mvncmxkdsnvfvm,vmz
            cmv m, fvkfnv fm,v mf,d vf vnfd vf,mnvm, nfdvjfjvn mv f
          </p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properly Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src={im2} alt="" />
      </div>
    </div>
  );
}

export default Homepage;
