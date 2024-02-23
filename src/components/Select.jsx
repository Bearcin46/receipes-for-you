import PropTypes from "prop-types";

import React from "react";

const Select = ({ name, register, error }) => {
  return (
    <div className="">
      <select
        name={name}
        {...register}
        id="recipeType"
        className="px-4 py-2 bg-[#cc8071] rounded w-full outline:none focus:outline-none"
      >
        <option value="" className="text-slate-200">
          --Select the Type of recipe--
        </option>
        <option value="veg" className="bg-white text-black">
          Veg
        </option>
        <option value="non-veg" className="bg-white text-black">
          Non-Veg
        </option>
      </select>
      {error && (
        <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
          {error.message}
        </small>
      )}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default Select;
