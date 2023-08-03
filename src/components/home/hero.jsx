// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

import { Form } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3 id="hero-title"> Find your spiritual service provider. Locally!</h3>
        <p>
          {" "}
          By engaging with a local spiritual service provider, individuals can
          benefit from their expertise, wisdom, and personalized approach, as
          they navigate their spiritual journeys. These providers often offer
          one-on-one consultations, group workshops, and various rituals or
          ceremonies, helping individuals explore and deepen their understanding
          of their own spirituality.
        </p>
      </div>
      <Form className="search-form" method="post" action="/searchResults">
        <label htmlFor="keyword">Keyword</label>
        <input type="text" name="keyword" id="keyword" />
        <label htmlFor="Address">Address</label>
        <input type="text" name="address" id="address" />

        <label htmlFor="Category">Category</label>
        <select
          type="text"
          name="category"
          id="category"
          defaultValue="Select a category"
        >
          <option value="hindu"> Select </option>
          <option value="hindu">Hindu priest</option>
          <option value="reiki">Reiki healer</option>
        </select>
        <button id="btn" type="submit">
          {" "}
          Search{" "}
        </button>
      </Form>
    </section>
  );
}
