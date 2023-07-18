import { Rating } from "@mui/material"
import { useState } from "react";
import '/src/styles/searchResults.css';
import provider from '/provider.jpg';

function SearchResults() {
    const [rating, setRating] = useState(3);

    return (
        <div className="search-results">

            <div className="provider-profile">
                <img src={provider} alt="a man" />
                <h2> Ravi Shashtri </h2>
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                        ``
                        setRating(newValue)
                    }}
                ></Rating>
                <p> Bio </p>
            </div>
            <div className="provider-profile">
                <img src={provider} alt="a man" />
                <h2> Ravi Shashtri </h2>
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue)
                    }}
                ></Rating>
                <p> Bio </p>
            </div>
            <div className="provider-profile">
                <img src={provider} alt="a man" />
                <h2> Ravi Shashtri </h2>
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue)
                    }}
                ></Rating>
                <p> Bio </p>
            </div>



        </div>
    )
}

export default SearchResults