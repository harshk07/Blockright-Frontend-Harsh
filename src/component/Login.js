import React from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
export const Login = () => {
    return (
        <div className=" bg-neutral-100 flex  justify-center h-[900px] ">
            <div className="flex flex-col h-[700px]  w-[800px] items-center justify-center">
                <div className="flex flex-col h-[50%]  w-[55%] border-2 justify-evenly bg-white rounded px-[5%] shadow-2xl shadow-black-500/40 " >
                    <div className=" flex items-center justify-center">
                        <h1 className="text-3xl text-[#112e40]"><b>Login</b></h1>
                    </div>
                    <div className="">
                        <label className="" for="uname"><b>Username</b>
                        </label>
                        <div className=" flex border-b-2">
                            <input className="mt-1 hover:placeholder:text-white w-[100%]  focus:outline-none " type="email" name="email" id="" placeholder="Enter your Email" />
                            <CiUser className="text-neutral-300"/>
                        </div>
                    </div>
                    <div className="">
                        <label className="" for="psw"> <b>Password</b> </label>
                        <div className=" flex border-b-2 ">
                            <input className="mt-1 hover:placeholder:text-white  w-[100%] focus:outline-none"
                                type="Password"
                                name="Password"
                                id=""
                                placeholder="Password"
                            />
                            <AiOutlineEye className="text-neutral-300" />
                        </div>
                    </div>
                    <div className="flex justify-center h-[10%]  "><button id="" className="bg-[#112e40] text-white h-[100%]  w-[33%] rounded  text-base">
                        Submit
                    </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
