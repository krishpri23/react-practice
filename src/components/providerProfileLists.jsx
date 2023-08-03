export default function ProviderProfile({ name, city, state, profilePicture }) {
  console.log(name);
  return (
    <section className="search-results">
      <div className="provider-profile">
        <img src={profilePicture} alt="a man" />
        <h2> {name} </h2>
        <h2>
          {city} , {state}{" "}
        </h2>
        {/* <Rating
      name="rating"
      value={rating}
      onChange={(event, newValue) => {
        ``;
        setRating(newValue);
      }}
    ></Rating> */}
        <p> </p>
      </div>
    </section>
  );
}
