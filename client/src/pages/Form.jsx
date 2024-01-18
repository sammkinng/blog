import React, { useContext, useEffect, useState } from "react";
import { ErrorMessage } from "components/ErrorMessage";
import {Text} from "components";
import {  useNavigate, useParams } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Inputfield2 from "components/Inputfield2";
import { createBlogPost, getBlogPostById, updateBlogPost } from "services/api";
import Modal from "components/Modal";
import { Context } from "App";

const Form = ({create}) => {
  const navigate = useNavigate()
  const params=useParams()
  const {reload,setReload}=useContext(Context)
  const [modal,setModal]=useState(false)
  const values = {
    headingtext: create?"Create new blog":"Edit blog",
    labelOne: "Title",
    textSix: "Awesome title of your blog",
    labelTwo: "Content",
    textEight: "Submit",
  };
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [error1,setError1]=useState(false)
  const [error2,setError2]=useState(false)
  useEffect(()=>{
    const getData=async()=>{
      if(!create){
        try {
          const res=await getBlogPostById(params.id)

          setTitle(res.title)
          setContent(res.content)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getData()
  },[])

  const submit=async ()=>{
    if(title==''){
      setError1(true)
      return 
    }
    if(content==''){
      setError2(true)
      return
    }
    try {
      if(create){
      await createBlogPost({
        title,content
      })
    }
    else{
      await updateBlogPost(params.id,{
        title,content
      })
    }
      setModal(true)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
    {modal &&
                <div className="fixed z-[2] h-screen w-screen">
                    <Modal
                        heading={'Blog posted!'}
                        btn2="Go to Dashboard"
                        onClick2={() => {
                            setModal(false)
                            setReload(!reload)
                            navigate('/')
                        }}
                    />
                </div>}
    
    <Header />
      <div className={values.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-16 h-[800px] md:h-auto items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <div className="flex flex-col gap-12 items-start justify-start w-[480px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                  size="txtInterSemiBold36"
                >
                  {values?.headingtext}
                </Text>
                
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  
                 
                           <Inputfield2
                        className='w-full'
                        type='text'
                        val={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        userlabel={values.labelOne}
                        />
                        {error1 &&
                                    <ErrorMessage errors={['Title should not be empty']} />}
                 
                  <Inputfield2
                  className='w-full'
                  txtarea={true}
                  rows={4}
                  val={content}
                  onChange={(e)=>{setContent(e.target.value)}}
                  userlabel={values.labelTwo}
                   />
                   {error2 &&
                                    <ErrorMessage errors={['Contenst should not be empty']} />}
                 
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start rounded-lg w-full">
                    <div onClick={submit} className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-5 py-3 rounded-lg shadow-bs w-full">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterSemiBold16WhiteA700"
                      >
                        {values?.textEight}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
