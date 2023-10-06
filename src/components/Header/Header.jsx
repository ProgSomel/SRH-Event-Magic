import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="mt-5">
      

      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="mt-5">
      <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
