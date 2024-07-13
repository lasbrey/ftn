import Link from "next/link";

export default function Services1() {
  return (
    <>
      <section className="services px-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="services__main">
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={37}
                      height={38}
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.9606 13.88C34.7889 6.66876 28.6638 1.30399 21.361 1.0928C21.0138 1.07919 20.6754 1.2042 20.4205 1.44029C20.1655 1.67637 20.0149 2.00415 20.0018 2.35138V2.35138V2.46885L20.824 14.7694C20.878 15.5974 21.5898 16.2269 22.4182 16.179L34.7523 15.3567C35.0999 15.331 35.4228 15.1678 35.6496 14.9032C35.8764 14.6386 35.9883 14.2945 35.9606 13.9471V13.88Z"
                        stroke="#D33535"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.8195 8.40957C13.6041 8.22809 14.407 8.62953 14.7325 9.36609C14.8178 9.53933 14.8691 9.72732 14.8835 9.91987C15.0514 12.3028 15.4038 17.5217 15.6051 20.3409C15.6395 20.8488 15.8749 21.322 16.2591 21.6558C16.6433 21.9896 17.1448 22.1566 17.6524 22.1197V22.1197L28.0064 21.482C28.4686 21.4542 28.9218 21.6187 29.2586 21.9365C29.5954 22.2542 29.786 22.6971 29.7851 23.1601V23.1601C29.3656 29.4125 24.8735 34.6394 18.7553 35.9942C12.6371 37.3491 6.3582 34.5074 3.33816 29.0167C2.43662 27.4365 1.86569 25.6894 1.66005 23.8817C1.57214 23.3269 1.53842 22.7649 1.55937 22.2036C1.57718 15.5266 6.26646 9.7735 12.8027 8.40957"
                        stroke="#D33535"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    Crypto Trading
                  </Link>
                  <p>
                    Buy and sell popular digital currencies, track your trades,
                    and manage your crypto portfolio in one place.
                  </p>
                </div>
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={31}
                      height={36}
                      viewBox="0 0 31 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6095 13.3208V9.3846C23.6095 4.77743 19.8732 1.0411 15.266 1.0411C10.6589 1.02093 6.90786 4.73893 6.8877 9.34793V9.3846V13.3208"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.2525 34.9576H8.24399C4.40499 34.9576 1.29199 31.8464 1.29199 28.0056V20.1424C1.29199 16.3016 4.40499 13.1904 8.24399 13.1904H22.2525C26.0915 13.1904 29.2045 16.3016 29.2045 20.1424V28.0056C29.2045 31.8464 26.0915 34.9576 22.2525 34.9576Z"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.2486 22.0381V26.1099"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    Secure Wallets
                  </Link>
                  <p>
                    Store your funds securely in our wallets with enhanced
                    protection and multi-signature support.
                  </p>
                </div>
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={45}
                      height={44}
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5332 3.66699H22.1332C21.5253 3.66699 21.0332 4.15907 21.0332 4.76699C21.0332 5.37491 21.5253 5.86699 22.1332 5.86699H26.5332C27.1411 5.86699 27.6332 5.37491 27.6332 4.76699C27.6332 4.15907 27.1411 3.66699 26.5332 3.66699Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M31.3001 0H13.7001C11.2743 0 9.30011 1.97416 9.30011 4.4V39.6C9.30011 42.0258 11.2743 44 13.7001 44H31.3001C33.726 44 35.7001 42.0258 35.7001 39.6V4.4C35.7001 1.97416 33.726 0 31.3001 0ZM33.5001 39.6C33.5001 40.8152 32.5153 41.8 31.3001 41.8H13.7001C12.485 41.8 11.5001 40.8152 11.5001 39.6V4.4C11.5001 3.18484 12.485 2.2 13.7001 2.2H31.3001C32.5153 2.2 33.5001 3.18484 33.5001 4.4V39.6Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M22.5002 40.3336C23.7152 40.3336 24.7002 39.3486 24.7002 38.1336C24.7002 36.9186 23.7152 35.9336 22.5002 35.9336C21.2851 35.9336 20.3002 36.9186 20.3002 38.1336C20.3002 39.3486 21.2851 40.3336 22.5002 40.3336Z"
                        fill="#3772FF"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    Mobile Access
                  </Link>
                  <p>
                    Access our trading platform and manage your crypto assets on
                    the go with our mobile app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="services__main">
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={37}
                      height={35}
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.6541 13.3714H6.78756C3.28357 13.3714 0.563599 10.6514 0.563599 7.14739C0.563599 3.64339 3.28357 0.923416 6.78756 0.923416H12.6201C13.7323 0.923416 14.6986 1.67553 14.962 2.76707L15.6257 5.53474"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.9621 21.3435H28.3574C31.8614 21.3435 34.5814 24.0635 34.5814 27.5675C34.5814 31.0715 31.8614 33.7914 28.3574 33.7914H19.4161C18.3039 33.7914 17.3376 33.0393 17.0742 31.9478L16.4105 29.1802"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.65042 21.3434H6.78217C3.27853 21.3434 0.558594 24.0633 0.558594 27.567C0.558594 31.0707 3.27853 33.7907 6.78217 33.7907H12.6148C13.727 33.7907 14.6932 33.0386 14.9566 31.9471L15.6204 29.1795"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.9585 13.3714H28.3525C31.8565 13.3714 34.5765 10.6514 34.5765 7.14739C34.5765 3.64339 31.8565 0.923416 28.3525 0.923416H19.416C18.3038 0.923416 17.3375 1.67553 17.0741 2.76707L16.4104 5.53474"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8256 25.3386L22.5756 9.19861"
                        stroke="#58BD7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    Exchange Services
                  </Link>
                  <p>
                    Easily exchange one cryptocurrency for another with our fast
                    and secure exchange services.
                  </p>
                </div>
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={37}
                      height={36}
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3588 26.8813L15.601 31.8705C15.6587 33.1125 16.6737 34.0564 17.9161 34.0564H19.0213C20.2634 34.0564 21.2785 33.1125 21.3362 31.8705L21.5784 26.8813"
                        stroke="#3772FF"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9716 8.24176C29.238 6.75526 27.6611 5.84522 25.871 5.84758H11.1305C9.34042 5.84522 7.76354 6.75526 7.02988 8.24176L1.53418 18.5879C0.683641 20.2737 1.77593 22.241 3.65391 22.241H33.3476C35.2255 22.241 36.3178 20.2737 35.4673 18.5879L29.9716 8.24176Z"
                        stroke="#3772FF"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.9009 13.2793C19.2071 13.2793 19.4668 13.0577 19.5442 12.7612L20.254 10.0197C20.3347 9.70723 20.1462 9.38428 19.8338 9.30356C19.5213 9.22283 19.1984 9.41135 19.1177 9.72382L18.4701 12.2124H15.6476L15.0001 9.72382C14.9193 9.41135 14.5963 9.22283 14.2839 9.30356C13.9715 9.38428 13.7829 9.70723 13.8637 10.0197L14.5734 12.7612C14.6508 13.0577 14.9105 13.2793 15.2167 13.2793H18.9009ZM13.7998 17.6287C13.7998 17.3206 14.0589 17.0615 14.367 17.0615H18.1616C18.4697 17.0615 18.7289 17.3206 18.7289 17.6287C18.7289 17.9368 18.4697 18.1959 18.1616 18.1959H14.367C14.0589 18.1959 13.7998 17.9368 13.7998 17.6287Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M35.9917 30.9858C35.9917 31.7933 35.3561 32.432 34.5486 32.432C33.741 32.432 33.1055 31.7933 33.1055 30.9858C33.1055 30.1783 33.741 29.5396 34.5486 29.5396C35.3561 29.5396 35.9917 30.1783 35.9917 30.9858Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M2.42873 32.432C3.23626 32.432 3.875 31.7933 3.875 30.9858C3.875 30.1783 3.23626 29.5396 2.42873 29.5396C1.6212 29.5396 0.982422 30.1783 0.982422 30.9858C0.982422 31.7933 1.6212 32.432 2.42873 32.432Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M22.0545 30.9858C22.0545 31.7933 21.4189 32.432 20.6114 32.432C19.8038 32.432 19.1682 31.7933 19.1682 30.9858C19.1682 30.1783 19.8038 29.5396 20.6114 29.5396C21.4189 29.5396 22.0545 30.1783 22.0545 30.9858Z"
                        fill="#3772FF"
                      />
                      <path
                        d="M11.7368 30.9858C11.7368 31.7933 11.1012 32.432 10.2937 32.432C9.48618 32.432 8.85059 31.7933 8.85059 30.9858C8.85059 30.1783 9.48618 29.5396 10.2937 29.5396C11.1012 29.5396 11.7368 30.1783 11.7368 30.9858Z"
                        fill="#3772FF"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    Enhanced Security
                  </Link>
                  <p>
                    Protect your digital assets with our advanced security
                    measures and encryption protocols.
                  </p>
                </div>
                <div className="services-box">
                  <div className="icon">
                    <svg
                      width={37}
                      height={37}
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0C8.297 0 0 8.297 0 18.5S8.297 37 18.5 37 37 28.703 37 18.5 28.703 0 18.5 0zm0 33.75C10.059 33.75 3.25 26.941 3.25 18.5S10.059 3.25 18.5 3.25 33.75 10.059 33.75 18.5 26.941 33.75 18.5 33.75z"
                        fill="#58BD7D"
                      />
                      <path
                        d="M18.5 8.969c-5.261 0-9.531 4.27-9.531 9.531s4.27 9.531 9.531 9.531 9.531-4.27 9.531-9.531-4.27-9.531-9.531-9.531zm0 15.312c-3.182 0-5.781-2.599-5.781-5.781s2.599-5.781 5.781-5.781 5.781 2.599 5.781 5.781-2.599 5.781-5.781 5.781z"
                        fill="#58BD7D"
                      />
                      <path
                        d="M18.5 12.625a5.873 5.873 0 1 0 0 11.746 5.873 5.873 0 0 0 0-11.746zm0 9.625a3.752 3.752 0 1 1 0-7.504 3.752 3.752 0 0 1 0 7.504z"
                        fill="#58BD7D"
                      />
                    </svg>
                  </div>
                  <Link href="#" className="h6 title">
                    24/7 Customer Support
                  </Link>
                  <p>
                    Our dedicated support team is available 24/7 to assist you
                    with any inquiries or issues you may have.
                  </p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
