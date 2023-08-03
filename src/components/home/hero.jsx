// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";

import SearchForm from "../searchForm";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3 id="hero-title"> Find your service provider. Locally!</h3>
        <p> </p>
      </div>
      <SearchForm />
    </section>
  );
}
