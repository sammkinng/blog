import React from "react";

import { Button, Text } from "components";

const ColumnHeading = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-300 text-sm w-full"
          size="txtInterSemiBold14Bluegray300"
        >
          {props?.headingThree}
        </Text>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              {!!props?.new ? (
                <Button
                  className="!text-teal-800 cursor-pointer font-inter font-medium min-w-[42px] rounded-[11px] text-center text-xs"
                  color="light_green_50"
                  size="xs"
                  variant="fill"
                >
                  {props?.new}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterSemiBold16Bluegray500"
                >
                  {props?.textEighteen}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ColumnHeading.defaultProps = {
  headingThree: "Product",
  textThirteen: "Releases",
  textFourteen: "Releases",
  textFifteen: "Releases",
  textSixteen: "Releases",
  textSeventeen: "Releases",
  textEighteen: "Releases",
};

export default ColumnHeading;
