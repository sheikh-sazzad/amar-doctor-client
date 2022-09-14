import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Samplework = () => {
  return (
    <div className="flex mb-20">
      <div>
        <img src={treatment} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-bold m-10">
          Exceptional Dental Care, on Your Terms
        </h3>
        <p className="ml-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          culpa quaerat, esse eligendi eos nesciunt.
        </p>
        <div className="ml-10 mt-5">
          <PrimaryButton>Checkup</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Samplework;
