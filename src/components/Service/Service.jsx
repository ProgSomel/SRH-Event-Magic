import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, image, price, description } = service;

  return (
    <div  className="card   shadow-xl " data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="3000">
      <figure >
        <img className="w-full h-[200px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl italic text-[#FFC95F]">{name}</h2>
        <p className="font-extralight">{description}</p>
        <p className="my-5 text-red-300">Price: ${price}</p>
        <div className=" ">
          <Link to={`/ServiceDetails/${id}`}>
          <button className="btn  bg-[#F9DEC9] w-full" >See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
