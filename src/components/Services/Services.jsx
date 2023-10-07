import Service from "../Service/Service";

const Services = ({services}) => {
    return (
        <div>
         <h2 className="text-7xl mt-8 italic font-extralight text-[#6A9C89]" data-aos="fade-right">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        {
            services.map((service) => <Service key={service.id} service={service}></Service>)
        }
    </div>
        </div>
    );
};

export default Services;