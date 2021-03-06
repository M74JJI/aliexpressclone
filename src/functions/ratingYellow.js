import React from 'react';
import StarRating from 'react-star-ratings';

export const showAverage = (p) => {
    if (p && p.ratings) {
        let ratingsArray = p && p.ratings;
        let total = [];
        let length = ratingsArray.length;
        // console.log("length", length);

        ratingsArray.map((r) => total.push(r.star));
        let totalReduced = total.reduce((p, n) => p + n, 0);
        // console.log("totalReduced", totalReduced);

        let highest = length * 5;
        // console.log("highest", highest);

        let result = (totalReduced * 5) / highest;
        // console.log("result", result);

        return (
            <div className="text-center pt-1 pb-3" style={{ color: '#000' }}>
                <span>
                    <StarRating
                        starDimension="15px"
                        starSpacing="0.2px"
                        starRatedColor="#ff9900"
                        rating={result}
                        editing={false}
                    />{' '}
                    Feedback[{p.ratings.length}] Orders({p.sold})
                </span>
            </div>
        );
    }
};
