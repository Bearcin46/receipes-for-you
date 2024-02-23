import PropTypes from "prop-types";
import React from "react";

const TextArea = ({ name, placeholder, register, error }) => {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        {...register}
        required
        cols="30"
        rows="3"
        className="bg-[#cc8071] placeholder-slate-200 w-full px-3 py-2 rounded focus:outline-none"
      ></textarea>
      {error && (
        <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
          {error.message}
        </small>
      )}
    </div>
  );
};
TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};
export default TextArea;
