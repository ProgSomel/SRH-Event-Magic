import { key } from "localforage";

const ServiceDetail = ({ service }) => {
  const {
    id,
    name,
    image,
    price,
    description,
    duration,
    venue_options,
    included_services,
    customization,
    availability,
    testimonials,
    booking_process,
    payment_options,
    contact_information,
    faqs,
    social_media_links,
    upcoming_events,
  } = service;
  return (
    <div
      className="max-w-screen-xl h-screen text-center italic  mx-auto px-4  md:px-16 lg:px-16"
      data-aos="fade-right"
    >
      <div className=" py-12  rounded overflow-hidden shadow-lg ">
        <img
          src={image}
          alt="Wedding Planning"
          className="w-full"
          data-aos="fade-right"
        />
        <div className="bg-red-100">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2" data-aos="fade-right">
              {name}
            </div>
            <p className="text-gray-700 text-base" data-aos="fade-right">
              {description}
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Duration:</strong> {duration}
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Venue Options:</strong> {venue_options}
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Included Services:</strong>
              {included_services}
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Customization:</strong> {customization}
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Availability:</strong> {availability}
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Testimonials: </strong>
            </p>
            <ul className="list-disc ml-6 text-gray-700" data-aos="fade-right">
              {testimonials?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Booking Process:</strong> Book online or schedule an
              in-person consultation
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Payment Options:</strong> Credit card, PayPal, deposit
              required
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Cancellation Policy:</strong> Cancellation with full
              refund allowed up to 7 days before the event
            </p>
          </div>
          <div className="px-6 py-4" data-aos="fade-right">
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Contact Information:</strong>
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              Phone: 123-456-7890
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              Email: weddings@example.com
            </p>
            <p className="text-gray-700" data-aos="fade-right">
              Address: 123 Main St, City, State
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700" data-aos="fade-right">
              <strong>FAQs:</strong>
            </p>
            {faqs?.map((faq, index) => (
              <div key={index} className="mb-2" data-aos="fade-right">
                <p className="text-gray-700" data-aos="fade-right">
                  <strong>Q: {faq.question}</strong>
                </p>
                <p className="text-gray-700" data-aos="fade-right">
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="px-6 py-4">
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Social Media:</strong>
            </p>
            <a
              href="https://www.facebook.com/weddingplanners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              data-aos="fade-right"
            >
              Facebook
            </a>
            <span className="text-gray-700 mx-2" data-aos="fade-right">
              |
            </span>
            <a
              href="https://www.instagram.com/weddingplanners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              data-aos="fade-right"
            >
              Instagram
            </a>
          </div>
          <div className="px-6 py-4" data-aos="fade-right">
            <p className="text-gray-700" data-aos="fade-right">
              <strong>Reviews and Ratings:</strong>
            </p>
            <a
              href="https://www.yelp.com/business/wedding-planning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              data-aos="fade-right"
            >
              Yelp
            </a>
            <span className="text-gray-700 mx-2" data-aos="fade-right">
              |
            </span>
            <a
              href="https://www.google.com/maps/wedding-planning/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              data-aos="fade-right"
            >
              Google Reviews
            </a>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700">
              <strong>Upcoming Events:</strong>
            </p>
            {upcoming_events?.map((item, idx) => (
              <div key={idx}>
                <p>
                  {item.name} {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
