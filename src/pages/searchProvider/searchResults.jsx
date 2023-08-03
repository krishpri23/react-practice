import { useEffect } from "react";
import "/src/styles/searchResults.css";
import ProviderProfile from "../../components/providerProfileLists";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../../components/searchForm";

function SearchResults() {
  const jsonData = useLoaderData();
  console.log(jsonData.results);

  return (
    <section className="search-results">
      <aside className="search-column">
        <SearchForm />
      </aside>
      <section className="providers-list">
        {jsonData.results &&
          jsonData.results.map((info, key) => {
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
    </section>
  );
}

export default SearchResults;

export const loadSearchResults = async () => {
  const res = await fetch("https://randomuser.me/api/?nat=us&results=12");
  return res.json();
};
