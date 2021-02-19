import React, { useState } from "react";

const useInput = initial => {
  const [value, setValue] = useState(initial);
  return [
    { value, onChange: ({ target: { value: v } }) => setValue(v) },
    () => setValue(initial),
  ];
};

export default useInput;
