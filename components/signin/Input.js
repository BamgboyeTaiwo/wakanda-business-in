import React from "react";
import styles from "../../styles/Forms.module.css";

function Input(props) {
  let { title, placeholder, required, value } = props;
  return (
    <div className={`w-full my-3 justify-start text-left`}>
      <label className="text-left pl-2 text-sm font-thin">
        {title || "..."}
        <span className="text-red-500 font-bold">{required && " *"}</span>
      </label>
      <input
        value={value}
        placeholder={placeholder || "..."}
        className={`${styles["text-input"]} w-full rounded-lg p-2`}
        onChange={(e) => {
          //console.log('e.target.value ', e.target.value);
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
