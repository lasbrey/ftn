'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

const faqData = [
    {
        question: "What is the Financial Trade Network (FTN) and when was it launched?",
        answer: "The Financial Trade Network (FTN) is a robust trading and investment platform that was launched in 2014. It serves as a comprehensive hub for traders and investors to execute trades, conduct research, and manage their portfolios effectively."
    },
    {
        question: "What features does the FTN platform offer to users?",
        answer: "FTN offers a wide range of features including real-time market data, advanced charting tools, customizable watchlists, portfolio tracking, trading alerts, and educational resources to help users make informed trading decisions."
    },
    {
        question: "Is the FTN platform suitable for both beginner and experienced traders?",
        answer: "Yes, the FTN platform caters to both beginner and experienced traders by providing intuitive user interfaces, and advanced tools to accommodate varying levels of expertise."
    },
    {
        question: "How secure is the FTN platform for trading and investment activities?",
        answer: "FTN employs state-of-the-art security measures including encryption protocols, multi-factor authentication, and regular security audits to ensure the safety of user accounts and sensitive financial information."
    }
];

export default function Faq() {
    const [isActive, setIsActive] = useState(null)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <div>
                    <section className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Frequently Asked Questions</h3>
                                        <p className="desc fs-20">Learn how to get started</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="flat-accordion">
                                        {faqData.map((faq, index) => (
                                            <div key={index} className={isActive === index ? "flat-toggle active" : "flat-toggle"} onClick={() => handleClick(index)}>
                                                <h6 className="toggle-title">{faq.question}</h6>
                                                <div className="toggle-content" style={{ display: `${isActive === index ? "block" : "none"}` }}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        ))}
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
                                            Discover how specific cryptocurrencies work — and get a bit of
                                            each crypto to try out for yourself.
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
        </>
    )
}
