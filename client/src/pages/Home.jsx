import React, { useContext } from "react";

import { Button, Img, Text } from "components";
import Postcard from "components/Postcard";

import Inputfield from "components/Inputfield";
import Footer from "components/Footer";
import Header from "components/Header";

import { Link } from "react-router-dom";
import { Context } from "App";

const Home = () => {
  const { list } = useContext(Context)

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-gray-50 border-b border-gray-100 border-solid flex items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div className="bg-gray-50 flex flex-col items-center justify-start pt-24 w-full">
            <div className="flex flex-col items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start max-w-5xl w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      >
                        Our blog
                      </Button>
                    </div>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-900 tracking-[-0.96px] w-full"
                      size="txtInterSemiBold48"
                    >
                      Resources and insights
                    </Text>
                  </div>
                  <Text
                    className="text-center text-deep_purple-500 text-xl w-full"
                    size="txtInterRegular20"
                  >
                    The latest industry news, interviews, technologies, and
                    resources.
                  </Text>
                </div>
                <Inputfield className="flex flex-col items-start justify-start w-80" />
              </div>
            </div>
            <Img
              className="h-24 w-[1440px]"
              src="images/img_backgroundpattern.svg"
              alt="backgroundpatte"
            />
          </div>
          <div className="mt-5 mb-5 flex justify-end max-w-7xl w-full px-8">
            <Link to="/create">
              <div className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg shadow-bs w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterSemiBold16WhiteA700"
                >
                  Create new Blog
                </Text>
              </div></Link>
          </div>
          <div className="flex flex-col items-center justify-start pb-24 w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {list.map((props, index) => (
                    <React.Fragment key={`Postcard${index}`}>
                      <Link to={'/post-' + props.user_id + '-' + index+'-'+props.id}>
                        <Postcard
                          className="bg-white-A700 flex flex-1 flex-col gap-8 h-[180px] md:h-auto items-start justify-start pb-8 pt-6 sm:px-5 px-6 shadow-bs1 w-full"
                          {...props}
                        /></Link>
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
