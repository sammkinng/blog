import React from "react";

import { Img, Input } from "components";

import { CloseSVG } from "../assets/images";

const Inputfield = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="input"
              placeholder="Search"
              value={inputvalue}
              onChange={(e) => setInputvalue(e)}
              className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-inter p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid flex w-full"
              prefix={
                <Img
                  className="mt-auto mb-px cursor-pointer h-5 mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#667084"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setInputvalue("")}
                  style={{
                    visibility: inputvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

Inputfield.defaultProps = {};

export default Inputfield;
