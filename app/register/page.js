"use client";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/authContext";

export default function Register() {
  const { createUser } = UserAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset error messages
    setPasswordError("");
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }

    try {
      const user = await createUser(name, email, password);

      await addDoc(collection(db, "Balance"), {
        userId: user.uid,
        balance: 10,
      });
      await addDoc(collection(db, "users"), {
        userId: user.uid,
        name,
        email,
        role: "user",
      });

      if (user) {
        console.log(user);

        router.push("/dashboard");
      } else {
        console.log("Registration unsuccessful");
        console.log(user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Register">
      <div>
        <section className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block-text center">
                  <h3 className="heading">
                    Register To Financial Trade Network
                  </h3>
                  <p className="desc fs-20">
                    Register in advance and enjoy the event benefits
                  </p>
                  {confirmPasswordError && (
                    <p className="text-danger text-center">
                      {confirmPasswordError}
                    </p>
                  )}
                  {passwordError && (
                    <p className="text-danger text-center">{passwordError}</p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="flat-tabs">
                  <div className="content-tab">
                    <div className="content-inner" style={{ display: "block" }}>
                      <form onSubmit={handleRegister}>
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Please enter your full name."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Please enter your email."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Password{" "}
                            <span>
                              (8 or more characters, including numbers and
                              special characters)
                            </span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Please enter a password."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Please enter a password."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn-action">
                          Register
                        </button>
                        <div className="bottom">
                          <p>Already have an account?</p>
                          <Link href="/login">Login</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-sale">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="block-text">
                  <h4 className="heading">Earn up to $25 worth of crypto</h4>
                  <p className="desc">
                    Discover how specific cryptocurrencies work — and get a bit
                    of each crypto to try out for yourself.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="button">
                  <Link href="#">Create Account</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
