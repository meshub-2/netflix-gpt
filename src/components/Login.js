import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/validations";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate All Fields
        const result = Validate(
            email.current.value,
            password.current.value,
            name?.current?.value,
        );
        setErrorMsg(result);

        if (errorMsg) return;
        // Firebase Authentication
        if (!signIn) {
            // User Sign Up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    })
                        .then(() => {
                            navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMsg(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        } else {
            // User Sign In
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    const { uid, displayName, email } = auth.currentUser;

                    dispatch(addUser({ uid, displayName, email }));
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        }
    };
    const toggleSignIn = () => {
        setSignIn(!signIn);
        setErrorMsg(null);
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
                <div className="bg-black my-44 p-8 w-3/12 opacity-85 flex flex-col text-white">
                    <h1 className="text-white font-bold p-4 text-3xl">
                        {signIn ? "Sign In" : "Sign Up"}
                    </h1>
                    {!signIn && (
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="p-4 m-4 bg-gray-700 rounded-md"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email or phone number"
                        className="p-4 m-4 bg-gray-700 rounded-md"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 m-4 bg-gray-700 rounded-md"
                    />
                    <p className="text-red-500 p-2 m-2"> {errorMsg} </p>
                    <button
                        onClick={handleSubmit}
                        className="bg-red-500 hover:bg-red-700 text-l rounded-md text-white font-bold p-4 m-4"
                    >
                        {signIn ? "Sign In" : "Sign Up"}
                    </button>
                    <p
                        className="px-4 m-4 cursor-pointer"
                        onClick={toggleSignIn}
                    >
                        {signIn
                            ? "New to Netflix? Click here to Sign Up"
                            : "Already registered? Click here to Sign In"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
