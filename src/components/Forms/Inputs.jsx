import React from "react";

const Inputs = ({
  type,
  placeholder,
  message,
  label,
  id,
  register,
  errors,
  min,
}) => {
  return (
    <div className="flex flex-col gap-0">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`px-2 py-2 border outline-none ${
          errors[id] ? "border-rose-700" : "border-slate-700"
        }  rounded-md`}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required: {
            value: true,
            message: message,
          },
          valueAsNumber: min ? true : false,
          validate: (data) => {
            if (data === 0) {
              return "Price is required*";
            } else if (data < 0) {
              return "Opps! Price can't be Negative";
            }
          },
        })}
      />
      {errors[id] && (
        <p className="text-rose-700 text-sm">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default Inputs;
