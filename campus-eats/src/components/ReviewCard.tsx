'use client'

interface ReviewCardProps {
    schoolName: string;
    schoolLocation: string;
    schoolImageURL: string;
    eateryName: string;
    numReviews: number;
    rating: number;
    description: string;
}

export default function ReviewCard({
    schoolName,
    schoolLocation,
    schoolImageURL,
    eateryName,
    numReviews,
    rating,
    description,
}: ReviewCardProps) {
    return (
        <article>
            <h2>{eateryName}</h2>
            <p>{schoolName} - {schoolLocation}</p>
            <img src={schoolImageURL} alt={schoolName} />
            <p>{numReviews} reviews</p>
            <p>{rating} stars</p>
            <p>{description}</p>
        </article>
    );
}