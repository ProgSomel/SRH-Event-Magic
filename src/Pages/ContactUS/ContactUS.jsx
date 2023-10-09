const ContactUS = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Please fill out the form below to get in touch with us.
          </p>
          <form action="mailto:somelahmed55email@gmail.com" className="space-y-4">
            <div>
              <label className="text-gray-700">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="text-gray-700">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label  className="text-gray-700">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
