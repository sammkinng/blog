import React, { useContext } from "react";

import { Img, Text } from "components";
import { Context } from "App";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {user } = useContext(Context)
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col h-20 md:h-auto items-center justify-center max-w-[1440px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl sm:px-5 px-8 w-full">

            <div className="flex sm:flex-1 sm:flex-col flex-row gap-10 items-center justify-start w-auto sm:w-full">
              <Link to='/'>
                <Img
                  className="h-8 w-[142px]"
                  src="images/img_logo.svg"
                  alt="logo"
                /></Link>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-500 w-auto"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Home
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start py-1 w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterSemiBold16Bluegray500"
                      >
                        Products
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start py-1 w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterSemiBold16Bluegray500"
                      >
                        Resources
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-500 w-auto"
                      size="txtInterSemiBold16Bluegray500"
                    >
                      Pricing
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            {
              (!user && !props.reg) &&

              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start rounded-lg w-auto">
                  <div className="flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg w-auto">
                    <Link to='/login'>
                      <Text
                        className="text-base text-blue_gray-500 w-auto"
                        size="txtInterSemiBold16Bluegray500"
                      >
                        Log in
                      </Text></Link>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start rounded-lg w-auto">
                  <Link to='/register'>
                    <div className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg shadow-bs w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterSemiBold16WhiteA700"
                      >
                        Sign up
                      </Text>
                    </div></Link>
                </div>
              </div>}
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
