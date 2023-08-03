import { useState } from "react";

export default function HowItWorks() {
  const [tabState, setTabState] = useState("user");

  const handleTabSwitch = (val) => {
    setTabState(val);
    console.log(val);
  };

  return (
    <section className="steps">
      <h3 id="title"> How sacredbox works </h3>
      <div className="tabs">
        <div
          className={tabState === "user" ? "tab-btn active" : "tab-btn"}
          onClick={() => handleTabSwitch("user")}
        >
          {" "}
          User{" "}
        </div>
        <div
          className={tabState === "provider" ? "tab-btn active" : "tab-btn"}
          onClick={() => handleTabSwitch("provider")}
        >
          {" "}
          Provider
        </div>
      </div>

      {tabState && tabState === "user" ? (
        <div className="grid-layout">
          <div className="grid-item ">
            <h4 id="grid-item-title">Search & Filter</h4>
            <p>
              The user can search for available priests based on their location
              or specific requirements.
            </p>
          </div>
          <div className="grid-item ">
            <h4 id="grid-item-title"> View Profile</h4>
            <p>
              The user can view detailed profiles of the priests listed on the
              platforms.
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Booking Service </h4>
            <p>
              The user can choose a suitable date & time for the service they
              require, such as wedding ceremony, Baptism or religious consulting
              session
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Confirmation</h4>
            <p>Confirmation</p>
          </div>

          <div className="grid-item">
            <h4 id="grid-item-title"> Communication</h4>
            <p>
              Consult with your priests and do the pre-requisite before service
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Feedback</h4>
            <p>After the event, leave a rating and feedback</p>
          </div>
        </div>
      ) : (
        <div className="grid-layout">
          <div className="grid-item ">
            <h4 id="grid-item-title">Create an Account </h4>
            <p>
              The user can search for available priests based on their location
              or specific requirements.
            </p>
          </div>
          <div className="grid-item ">
            <h4 id="grid-item-title"> Setup profile</h4>
            <p>
              The user can view detailed profiles of the priests listed on the
              platforms.
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Manage bookings </h4>
            <p>
              The user can choose a suitable date & time for the service they
              require, such as wedding ceremony, Baptism or religious consulting
              session
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Notifications </h4>
            <p>Confirmation</p>
          </div>

          <div className="grid-item">
            <h4 id="grid-item-title"> Communication</h4>
            <p>
              Consult with your priests and do the pre-requisite before service
            </p>
          </div>

          <div className="grid-item ">
            <h4 id="grid-item-title"> Invoice</h4>
            <p>After the event, leave a rating and feedback</p>
          </div>
        </div>
      )}
    </section>
  );
}
