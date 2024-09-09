import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    const toggleSignIn = () => {
        setSignIn(!signIn);
    };

    return (
        <div
            className="h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg")`,
            }}
        >
            <Header />
            <div className="relative flex justify-center items-center h-screen">
                <form className="bg-black my-44 p-8 w-3/12 opacity-85 flex flex-col text-white">
                    <h1 className="text-white font-bold p-4 text-3xl">
                        {signIn ? "Sign In" : "Sign Up"}
                    </h1>
                    {!signIn && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 m-4 bg-gray-700 rounded-md"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email or phone number"
                        className="p-4 m-4 bg-gray-700 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="p-4 m-4 bg-gray-700 rounded-md"
                    />

                    <button className="bg-red-500 hover:bg-red-700 text-l rounded-md text-white font-bold p-4 m-4">
                        {signIn ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="px-4 m-4" onClick={toggleSignIn}>
                        {signIn
                            ? "New to Netflix? Click here to Sign Up"
                            : "Already registered? Click here to Sign In"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
