import { useEffect } from "react";
import "/src/styles/searchResults.css";
import ProviderProfile from "../../components/providerProfileLists";
import { useState } from "react";

function SearchResults() {
  //   const [rating, setRating] = useState(3);

  const [userData, setUserData] = useState();

  const handleApiRequest = () => {
    fetch("https://randomuser.me/api/?nat=us&results=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.results);
      });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  return (
    <section>
      {userData &&
        userData.map((info, key) => {
          const {
            name: { first, last },
            location: { city, state },
            picture: { medium },
          } = info;

          return (
            <ProviderProfile
              key={key}
              name={`${first}  ${last}`}
              city={city}
              state={state}
              profilePicture={medium}
            />
          );
        })}
    </section>
  );
}

export default SearchResults;
