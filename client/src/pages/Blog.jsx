import React, { useContext, useState } from "react";

import { Img, Line, Text } from "components";
import { Context } from "App";
import { useNavigate, useParams } from "react-router-dom";


import Header from "components/Header";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import { formatDateToMMMDD } from "components/Postcard";
import Modal from "components/Modal";
import { deletePost } from "services/blog";

const Blog = (props) => {
  const navigate=useNavigate()
  const [modal,setModal]=useState(false)
  const [modal1,setModal1]=useState(false)
  const { list, user,reload,setReload } = useContext(Context)
  const params = useParams()
  const id = params.id.split('-')[1]
  const deleteBlog=async()=>{
    try {
      await deletePost(params.id.split('-')[2])
      setModal(false)
      setModal1(true)
    } catch (error) {
      console.log(error)
      setModal(false)
    }
  }
  return (
    <>
    {modal &&
                <div className="fixed z-[2] h-screen w-screen">
                    <Modal
                        heading={'Warning! this blog will be deleted!'}
                        btn1="Delete"
                        btn2="Cancel"
                        onClick1={deleteBlog}
                        onClick2={() => {
                            setModal(false)
                        }}
                    />
                </div>}
                {modal1 &&
                <div className="fixed z-[2] h-screen w-screen">
                    <Modal
                        heading={'Blog deleted!'}
                        
                        btn2="Go to dashboard"
                        
                        onClick2={() => {
                            setModal1(false)
                            setReload(!reload)
                            navigate('/')
                        }}
                    />
                </div>}
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border-b border-gray-100 border-solid flex items-center justify-center md:px-5 w-full" />
        <div
          className="bg-white-A700 flex flex-col items-center justify-start w-full"
        >

          <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start py-24 w-full">
            <div className="flex flex-col items-center justify-start sm:px-5 px-8 w-auto md:w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start max-w-[960px] w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-center text-deep_purple-400 w-full"
                      size="txtInterSemiBold16Deeppurple400"
                    >
                      Published  {formatDateToMMMDD(list[id].created_at)}
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 tracking-[-0.96px] w-full"
                      size="txtInterSemiBold48Gray900"
                    >
                      {list[id].title}
                    </Text>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start pb-24 w-full">
            <div className="flex flex-col items-center justify-start max-w-7xl sm:px-5 px-8 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-12 items-start justify-start max-w-[720px] w-full">
                  <div className="flex flex-col gap-8 items-start justify-start">
                    <Text
                      className="leading-[30.00px] max-w-[720px] md:max-w-full text-blue_gray-500 text-xl"
                      size="txtInterRegular20Bluegray500"
                    >
                      {list[id].content}
                    </Text>

                  </div>

                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Line className="bg-blue_gray-50 h-px w-full" />
                    <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_avatar_56x56.png"
                          alt="avatar"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-lg w-auto"
                            size="txtInterSemiBold18"
                          >
                            {list[id].username}
                          </Text>

                        </div>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start w-auto">
                        {user == list[id].username && <>
                          <div className="flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg w-auto"
                          onClick={()=>setModal(true)}
                          >
                            <Text
                              className="text-base text-blue_gray-500 w-auto"
                              size="txtInterSemiBold16Bluegray500"               
                            >
                              Delete
                            </Text>
                          </div>
                          <Link to={'/edit-'+params.id.split('-')[2]}>
                            <div className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg shadow-bs w-auto">

                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtInterSemiBold16WhiteA700"
                              >
                                Edit
                              </Text>
                            </div>
                          </Link>
                        </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
