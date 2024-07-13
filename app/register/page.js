'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Register() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Register">
            <div>
                <section className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Register To Financial Trade Network</h3>
                                    <p className="desc fs-20">
                                        Register in advance and enjoy the event benefits
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="flat-tabs">
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: "block" }}>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Full Name</label>
                                                    <input type="text" className="form-control" id="fullName" placeholder="Please enter your full name." />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Please enter your email." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password{" "}
                                                        <span>(8 or more characters, including numbers and special characters)</span>
                                                    </label>
                                                    <input type="password" className="form-control" placeholder="Please enter a password." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirm Password
                                                    </label>
                                                    <input type="password" className="form-control" placeholder="Please enter a password." />
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
                                        Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
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
    )
}
