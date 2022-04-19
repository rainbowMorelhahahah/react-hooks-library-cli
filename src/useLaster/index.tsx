
import React, { useRef } from "react"

function useLaster(value: any) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export default useLaster;