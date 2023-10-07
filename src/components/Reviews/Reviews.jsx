import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import Review from "../Review/Review";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch("/reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
        
    }, [])

    return (
        <div className="ml-4">
            <h2 className="text-7xl  italic  font-extralight text-[#6A9C89] mt-12" data-aos="fade-right">Reviews</h2>
        <Marquee pauseOnHover >
            <div className="">
        
            <div className="flex gap-6 mt-5 ">
            {
                reviews.map((review) => <Review key={review.id} review={review}></Review>)
            }
        </div>
        </div>
        </Marquee>
        </div>
        
    );
};

export default Reviews;