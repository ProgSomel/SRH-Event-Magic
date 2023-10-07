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
        <div className=" ">
          <button className="btn btn-outline btn-success w-full" >See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
