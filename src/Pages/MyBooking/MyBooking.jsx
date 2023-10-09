const MyBooking = ({ booking }) => {
  const { name, image, price, description,} = booking;
  console.log(booking);

  return (
    <div>
      <div  className="  hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="  flex-1 rounded-lg shadow-2xl "
          
        />
        <div className="flex-1 ">
          <p
            className="text-2xl text-orange-400 px-2 w-[90px] rounded-md"
            
          >
            {name}
          </p>
          
          <p className="text-red-400 ml-2">${price}</p>
        
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
