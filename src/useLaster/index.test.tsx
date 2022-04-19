import React from "react";
import useLaster from ".";
import { render } from '@testing-library/react';

test("test useRef", () => {
  const Component = () => {
    const ref = useLaster(null);
    console.log(ref);
    return (
      <>
      </>
    )
  }

  render(<Component />)
})