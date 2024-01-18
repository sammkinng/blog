import React from "react";

import { Input } from "components";

const Inputfield1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="input_One"
              placeholder="Enter your email"
              className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-inter p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid w-full"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

Inputfield1.defaultProps = {};

export default Inputfield1;
