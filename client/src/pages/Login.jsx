import React, { useContext, useState } from "react";

import { Img, Text } from "components";

import auth from "services/auth";
import Inputfield2 from "components/Inputfield2";
import Header from "components/Header";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "components/ErrorMessage";
import { Context } from "App";
import Modal from "components/Modal";

const LoginPage = ({
    register = false
}) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const { setUser } = useContext(Context)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        cnf: ''
    })
    const [error1, setError1] = useState(null)
    const [error2, setError2] = useState(null)
    const [error3, setError3] = useState(null)
    const [error, setError] = useState('')
    const signInUser = async () => {
        if (error1 == '' && error2 == '') {
            if (register) {
                if (error3 == '') {
                    try{
                    const res = await auth.register(formData)
                        setUser(res.username)
                        setModal(true)
                    }
                    catch(e){
                        setError("Username already exists")
                    }
                }
            }
            else {
                const res = await auth.login(formData)
                console.log(res)
                setUser(res.username)
                setModal(true)
            }
        }
    }
    const handleChange = (val, ip) => {
        switch (ip) {
            case 'username':
                if (val.length < 4) {
                    setError1('Username must be at least 4 characters long')
                }
                else {
                    setError1('')
                }
                break
            case 'password':
                if (!isStrongPassword(val)) {
                    setError2('Password is not strong enough')
                }
                else {
                    setError2('')
                }
                break
            case 'cnf':
                if (formData.password === val) {
                    setError3('')
                }
                else {
                    setError3('Passwords do not match')
                }
                break
            default:
                console.log('')
        }
        let o = { ...formData }
        o[ip] = val
        setFormData(o)
    }
    return (
        <>
            {modal &&
                <div className="fixed z-[2] h-screen w-screen">
                    <Modal
                        heading={register ? 'User Registration successful!' : 'User Logged in!'}
                        btn2="Go to Dashboard"
                        onClick2={() => {
                            setModal(false)
                            navigate('/')
                        }}
                    />
                </div>}
            <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
                <Header className="bg-gray-50 border-b border-gray-100 border-solid flex items-center justify-center md:px-5 w-full" reg={true} />
                <div className="bg-white-A700 flex flex-col h-[960px] md:h-auto items-center justify-start pb-12 pt-24 sm:px-5 px-8 w-full">
                    <div className="flex flex-col gap-8 items-center justify-start md:px-5 w-[360px]">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <Img
                                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                                src="images/img_content.png"
                                alt="content"
                            />
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <Text
                                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-full"
                                    size="txtInterSemiBold30"
                                >
                                    {register ? 'Create an Account' : 'Log in to your account'}
                                </Text>
                                <Text
                                    className="text-base text-blue_gray-500 text-center w-full"
                                    size="txtInterRegular16Bluegray500"
                                >
                                    {register ? 'Welcome!' : 'Welcome back!'} Please enter your details.
                                </Text>
                                {error &&
                                    <ErrorMessage errors={[error]} />}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <div className="flex flex-col gap-5 items-start justify-start w-full">
                                <Inputfield2
                                    className="flex flex-col items-start justify-start w-full"
                                    userlabel="Username"
                                    type='email'
                                    val={formData.username}
                                    onChange={(e) => handleChange(e.target.value, 'username')}
                                />
                                {error1 &&
                                    <ErrorMessage errors={[error1]} />}
                                <Inputfield2
                                    className="flex flex-col items-start justify-start w-full"
                                    userlabel="Password"
                                    type='password'
                                    val={formData.password}
                                    onChange={(e) => handleChange(e.target.value, 'password')}
                                />
                                {error2 &&
                                    <ErrorMessage errors={[error2]} />}
                                {
                                    register && <>
                                        <Inputfield2
                                            type='password'
                                            className="flex flex-col items-start justify-start w-full"
                                            userlabel="Confirm Password"
                                            val={formData.cnf}
                                            onChange={(e) => handleChange(e.target.value, 'cnf')}
                                        />

                                        {error3 &&
                                            <ErrorMessage errors={[error3]} />}

                                    </>
                                }
                            </div>

                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start rounded-lg w-full" onClick={signInUser}>
                                    <div className="bg-deep_purple-400 border border-deep_purple-400 border-solid flex flex-col items-center justify-center px-[18px] py-2.5 rounded-lg shadow-bs w-full">
                                        <div

                                            className="text-base text-white-A700 w-auto"
                                        >
                                            <Text size="txtInterSemiBold16WhiteA700">{register ? 'Sign up' : 'Sign in'}</Text>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-1 items-start justify-center w-full">
                            <a
                                href="javascript:"
                                className="text-blue_gray-500 text-sm w-auto"
                            >
                                <Text size="txtInterRegular14">{register ? 'Already have an account?' : 'Don’t have an account?'}</Text>
                            </a>
                            <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col items-center justify-center w-auto">
                                    <a
                                        href="javascript:"
                                        className="text-deep_purple-500 text-sm w-auto"
                                    >
                                        <Link to={register ? '/login' : '/register'}>
                                            <Text size="txtInterSemiBold14">{register ? 'Sign in' : 'Sign up'}</Text></Link>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;


function isStrongPassword(password) {
    // Password must contain at least 8 characters
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Password must contain at least one digit (0-9)
    if (!/\d/.test(password)) {
        return false;
    }

    // Password may contain at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        return false;
    }

    // If all criteria are met, return true
    return true;
}
