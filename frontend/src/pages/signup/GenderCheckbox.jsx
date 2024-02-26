import React from "react";

const GenderCheckbox = ({handleCheckboxChange, selectedGender}) => {
  return (
    <div className="flex">
      {/* male */}
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span>Male</span>
          <input type="checkbox" className="checkbox" name="gender" value="male" checked={selectedGender === "male"}  onChange={() => handleCheckboxChange("male")}/>
        </label>
      </div>

      {/* female */}
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span>Female</span>
          <input type="checkbox" className="checkbox" name="gender" value="female" checked={selectedGender === "female"} onChange={() => handleCheckboxChange("female")}/>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
