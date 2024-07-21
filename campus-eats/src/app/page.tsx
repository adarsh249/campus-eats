import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/landing/Search";
import ReviewCard from "./components/landing/ReviewCard";

const cardsData = [
  {
      eateryName: "Campus Eatery 1",
      description: "This is a review of Campus Eatery 1.",
      rating: 4,
      numReviews: 5,
      schoolName: "University of Campus",
      schoolLocation: "Campus City, Campus State",
      schoolImageURL: "https://via.placeholder.com/150",
      
  },
  {
    eateryName: "Campus Eatery 2",
    description: "This is a review of Campus Eatery 2.",
    rating: 3,
    numReviews: 3,
    schoolName: "University of Campus",
    schoolLocation: "Campus City, Campus State",
    schoolImageURL: "https://via.placeholder.com/150",
  },
  {
    eateryName: "Campus Eatery 3",
    description: "This is a review of Campus Eatery 3.",
    rating: 5,
    numReviews: 7,
    schoolName: "University of Campus",
    schoolLocation: "Campus City, Campus State",
    schoolImageURL: "https://via.placeholder.com/150",
  },
  {
    eateryName: "Campus Eatery 4",
    description: "This is a review of Campus Eatery 4.",
    rating: 2,
    numReviews: 2,
    schoolName: "University of Campus",
    schoolLocation: "Campus City, Campus State",
    schoolImageURL: "https://via.placeholder.com/150",
  },
  {
    eateryName: "Campus Eatery 5",
    description: "This is a review of Campus Eatery 5.",
    rating: 1,
    numReviews: 1,
    schoolName: "University of Campus",
    schoolLocation: "Campus City, Campus State",
    schoolImageURL: "https://via.placeholder.com/150",
  },
  {
    eateryName: "Campus Eatery 6",
    description: "This is a review of Campus Eatery 6.",
    rating: 4,
    numReviews: 4,
    schoolName: "University of Campus",
    schoolLocation: "Campus City, Campus State",
    schoolImageURL: "https://via.placeholder.com/150",
  }
]
export default function Home() {
  return (
    <div className="relative">
      <div className="relative h-96 bg-no-repeat bg-center bg-cover bg-landing-page-image">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <Search />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/*cardsData.map((card, index) => (
            <ReviewCard
                eateryName={card.eateryName}
                description={card.description}
                schoolImageURL={card.schoolImageURL}
                schoolLocation={card.schoolLocation}
                rating={card.rating}
                numReviews={card.numReviews}
                schoolName={card.schoolName}
                key={index}
            />
        ))*/}
      </div>
    </div>
  );
}

