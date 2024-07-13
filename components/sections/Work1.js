import Link from "next/link";

export default function Work1() {
    return (
        <>
            <section className="work px-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">How It Works</h3>
                                <p className="fs-20 desc">
                                    Follow these simple steps to get started with our platform.
                                </p>
                            </div>
                            <div className="work__main">
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Cloud.png" alt="Sign Up Icon" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 1</p>
                                        <Link href="#" className="title">Sign Up</Link>
                                        <p className="text">
                                            Create your account by providing the necessary information and verifying your email.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="Connect Line" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Wallet.png" alt="Deposit Crypto Icon" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 2</p>
                                        <Link href="#" className="title">Deposit Crypto</Link>
                                        <p className="text">
                                            Add funds to your account by depositing your preferred cryptocurrency.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="Connect Line" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Mining.png" alt="Trade Crypto Icon" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 3</p>
                                        <Link href="#" className="title">Trade Crypto</Link>
                                        <p className="text">
                                            Start trading by selecting the cryptocurrencies you want to buy or sell.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="Connect Line" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Comparison.png" alt="Earn Money Icon" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 4</p>
                                        <Link href="#" className="title">Earn Money</Link>
                                        <p className="text">
                                            Monitor your investments and enjoy the profits from your successful trades.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
