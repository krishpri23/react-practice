// create multiple accordians and clicking on any one should collapse the other two
// create a form with multiple acc with checkboxes, until all checkboxes are checked you cant submit
const Accordian = ({
  accordian,
  setAccordian,
  toggleAccordian,
  setAllChecked,
  handleCheckBox,
}) => {
  return (
    <div className="accordian-home" key={accordian.id}>
      <div className="accordian">
        <input
          type="checkbox"
          name="acc-check"
          id="acc-check"
          checked={accordian.checked}
          onChange={() => handleCheckBox(accordian.id)}
          // setAllChecked(accordian?.every((item) => item.isChecked));
        />
        <p> {accordian.title} </p>{" "}
        <button onClick={() => toggleAccordian(accordian.id)}>V </button>
      </div>
      {accordian?.isOpen ? (
        <div className="details"> {accordian.body} </div>
      ) : null}
    </div>
  );
};

export default Accordian;
