const Banner = () => {
  return (
    <div
      className="hero min-h-screen"  
      style={{
        backgroundImage:
          "url(https://i.ibb.co/mhYnW3S/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-extralight italic text-[#F1B4BB] " data-aos="zoom-out-right" >Events</h1>
          <p className="mt-8  text-[#D6CC99] italic" data-aos="zoom-out-right">
            Need help planning your Events? We've got you covered! With our event planning and unique event design expertise, your event will look amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
