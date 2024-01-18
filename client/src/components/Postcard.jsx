import React from "react";

import { Img, Text } from "components";

const Postcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 h-full items-start justify-between w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-full">

            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-full">
                <Text
                  className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  {props?.title}
                </Text>
                <div className="flex flex-col items-start justify-start pt-1 w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                </div>
              </div>
              <Text
                className="leading-[24.00px] max-w-[336px] md:max-w-full text-base text-blue_gray-500"
                size="txtInterRegular16"
              >
                {props?.content.slice(0, 20)} ......
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-10 md:h-auto rounded-[50%] w-10"
              src="images/img_avatar.png"
              alt="avatar"
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtInterSemiBold14Gray900"
              >
                {props?.username}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtInterRegular14Bluegray500"
              >
                {formatDateToMMMDD(props?.created_at)}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function formatDateToMMMDD(date) {
  const d=new Date(date)
  const options = { month: 'short', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
}

export default Postcard;
