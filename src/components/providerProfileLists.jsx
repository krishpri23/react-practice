import { Link } from "react-router-dom";

export default function ProviderProfile({ name, city, state, profilePicture }) {
  console.log(name);
  return (
    <>
      <div className="provider-profile">
        <img
          className="provider-picture"
          src={profilePicture}
          alt="a professional"
        />
        <h2> {name} </h2>
        <h2>
          {city} , {state}{" "}
        </h2>
      </div>
    </>
  );
}
