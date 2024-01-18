import ColumnHeading from "components/ColumnHeading";
import Inputfield1 from "components/Inputfield1";

import { Img, Line, Text } from "components";

const Footer = () => {
  return <footer className="bg-white-A700 flex items-center justify-center pb-12 pt-16 md:px-5 w-full">
    <div className="flex flex-col md:gap-10 gap-16 items-center justify-center w-[89%] md:w-full">
      <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-gray-900 text-xl w-full"
              size="txtInterMedium20"
            >
              Join our newsletter
            </Text>
            <Text
              className="text-base text-blue_gray-500 w-full"
              size="txtInterRegular16"
            >
              We’ll send you a nice letter once per week. No spam.
            </Text>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
            <Inputfield1 className="flex flex-col h-11 md:h-auto items-start justify-start w-[280px]" />
            <div className="flex flex-col items-start justify-start rounded-lg w-auto">
              <div className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg shadow-bs w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterSemiBold16WhiteA700"
                >
                  Subscribe
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-blue_gray-50 h-px w-full" />
      </div>
      <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
        <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-full">
          <ColumnHeading className="flex flex-1 flex-col gap-4 items-start justify-start w-full" />
          <ColumnHeading
            className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
            headingThree="Company"
          />
          <ColumnHeading
            className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
            headingThree="Resources"
          />
          <ColumnHeading
            className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
            headingThree="Use cases"
          />
          <ColumnHeading
            className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
            headingThree="Social"
          />
          <ColumnHeading
            className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
            headingThree="Legal"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
        <Line className="bg-blue_gray-50 h-px w-full" />
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Img
            className="h-8 w-[142px]"
            src="images/img_logo.svg"
            alt="logo_One"
          />
          <Text
            className="text-base text-blue_gray-300 w-auto"
            size="txtInterRegular16Bluegray300"
          >
            © 2077 Untitled UI. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer