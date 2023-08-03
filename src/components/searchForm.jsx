import { Form } from "react-router-dom";

export default function SearchForm() {
  return (
    <>
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
    </>
  );
}
