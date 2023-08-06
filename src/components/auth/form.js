import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSubmitHandler = (e) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        e.preventDefault();
        onFormSubmit(email, password);
    }
    return (
        <>
            <div>
                <div className="formCss2">
                    <h2>
                        {signin ? "Sign in to your account" : "Signup for new account"}
                    </h2>
                </div> <br /> <br />

                <div className="formCss">
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="email"> Email address </label>
                            <br />

                            <div>
                                <input

                                    id="email"
                                    name="email"
                                    type="email"
                                    ref={emailRef}
                                    autoComplete="email"
                                    required

                                />
                            </div> <br />
                        </div>

                        <div>
                            <div>
                                <label
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>
                            <div>
                                <input
                                    id="password"
                                    ref={passwordRef}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required />
                            </div> <br />
                        </div>
                        <div>
                            <div>
                                <Link className="link2" href={signin ? "/auth/signup" : "/auth/login"} >
                                    {signin ? "Do not have an account? Signup" : "Already have an account? Sign in"}
                                </Link>
                            </div> <br />
                        </div>
                        <div>
                            <button  className="btn2" type="submit">
                                {signin ? "Sign in" : "Sign up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}