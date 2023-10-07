import { key } from "localforage";

const ServiceDetail = ({ service }) => {
  const {id,name, image, price, description, duration, venue_options, included_services, customization, availability, testimonials, booking_process, payment_options, contact_information, faqs, social_media_links, upcoming_events} = service;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        src={image}
        alt="Wedding Planning"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>Duration:</strong> {duration}
        </p>
        <p className="text-gray-700">
          <strong>Venue Options:</strong> {venue_options}
        </p>
        <p className="text-gray-700">
          <strong>Included Services:</strong> 
          {
            included_services
          }
          
        </p>
        <p className="text-gray-700">
          <strong>Customization:</strong> {customization}
        </p>
        <p className="text-gray-700">
          <strong>Availability:</strong> {availability}
        </p>
        <p className="text-gray-700">
          <strong>Testimonials: </strong>
            
        </p>
        <ul className="list-disc ml-6 text-gray-700">
        {
        testimonials?.map((item,idx) => (
          <li key={idx}>{item}</li>
        ))
      
  }
        </ul>
        <p className="text-gray-700">
          <strong>Booking Process:</strong> Book online or schedule an in-person
          consultation
        </p>
        <p className="text-gray-700">
          <strong>Payment Options:</strong> Credit card, PayPal, deposit
          required
        </p>
        <p className="text-gray-700">
          <strong>Cancellation Policy:</strong> Cancellation with full refund
          allowed up to 7 days before the event
        </p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>Contact Information:</strong>
        </p>
        <p className="text-gray-700">Phone: 123-456-7890</p>
        <p className="text-gray-700">Email: weddings@example.com</p>
        <p className="text-gray-700">Address: 123 Main St, City, State</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>FAQs:</strong>
        </p>
          {
            faqs?.map((faq, index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-700">
              <strong>Q: {faq.question}</strong>
            </p>
            <p className="text-gray-700">A: {faq.answer}</p>
          </div>
        ))
          }
      </div>
     
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>Social Media:</strong>
        </p>
        <a
          href="https://www.facebook.com/weddingplanners"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Facebook
        </a>
        <span className="text-gray-700 mx-2">|</span>
        <a
          href="https://www.instagram.com/weddingplanners"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Instagram
        </a>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>Reviews and Ratings:</strong>
        </p>
        <a
          href="https://www.yelp.com/business/wedding-planning"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Yelp
        </a>
        <span className="text-gray-700 mx-2">|</span>
        <a
          href="https://www.google.com/maps/wedding-planning/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Google Reviews
        </a>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700">
          <strong>Upcoming Events:</strong>
        </p>
      {
        upcoming_events?.map((item, idx) => ( <div key={idx}>
            <p>{item.name} {item.date}
            
            </p>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default ServiceDetail;
