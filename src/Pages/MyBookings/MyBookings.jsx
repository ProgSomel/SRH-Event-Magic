import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {

    const myBookings = JSON.parse(localStorage.getItem('booking'))

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16 mb-7">
            {
                myBookings.map((booking, idx) => <MyBooking key={idx} booking={booking}></MyBooking>)
            }
        </div>
        </div>
    );
};

export default MyBookings;