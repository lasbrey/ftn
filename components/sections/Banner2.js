import Link from "next/link";

export default function Banner2() {
  return (
    <>
      <section className="banner px-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__content">
                <h2 className="title">Make better Financial Decisions</h2>
                <p className="fs-20 desc">
                  Financial Trade Network provides innovative solutions for
                  individuals and businesses. Our commitment to excellence and
                  transparency ensures that you can make informed and confident
                  financial decisions.
                </p>
                <Link href="#" className="btn-action">
                  <span>Get Started Now</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__image">
                <img src="/assets/images/layout/crypto-banner.png" alt="" width="80%"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
