import { TiTickOutline } from 'react-icons/ti';
const Review = ({ review }) => {
  const { title, description, reviewerImage, rating, date, reviewerName } = review;

  return (
    <div className="card shadow-lg w-96 ">
      <div className="card-body">
        <h2 className="card-title text-[#FFC95F] italic font-bold">{title}</h2>
        <p className='text-[#04364A]'>{description}</p>
        <p className='text-orange-300 font-bold text-2xl'>{rating}</p>
        <p className='text-[#FF8080] italic'>{date}</p>
        
        <div className='flex items-center gap-2 ml-4'>
        <div className='flex gap-4 items-center'>
        <img className="w-[30px]" src={reviewerImage} alt="" />
            <p className='text-[#45CFDD] font-bold'>{reviewerName}</p>
            
        </div>
        <p className='text-green-950'><TiTickOutline></TiTickOutline></p>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
