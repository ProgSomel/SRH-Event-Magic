import { useEffect } from "react";
import MyBooking from "../MyBooking/MyBooking";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyBookings = () => {

    const myBookings = JSON.parse(localStorage.getItem('booking'))

    useEffect(() => {
        if (!myBookings) {
          Swal.fire('You have not Booked Any Event yet');
        }
      }, [myBookings]);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16 mb-7">
            {
                myBookings ? myBookings.map((booking, idx) => <MyBooking key={idx} booking={booking}></MyBooking>): ""
            }
        </div>
        </div>
    );
};

export default MyBookings;