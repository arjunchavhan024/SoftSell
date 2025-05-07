import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row text-muted">
          <div className="col-md-4 mb-4">
            <img src="media/images/logo.png" alt="logo" className="logo" />
            <p className="copy-text">
              &copy; 2010 - 2025, SoftSell Broking Ltd. <br /> All rights
              reserved.
            </p>
            <div className="icons">
              <div className="border-bottom">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
              <span>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Referral programme</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">SoftSell.tech</a>
              </li>
              <li>
                <a href="#">Open source</a>
              </li>
              <li>
                <a href="#">Press & media</a>
              </li>
              <li>
                <a href="#">SoftSell Cares (CSR)</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">Z-Connect blog</a>
              </li>
              <li>
                <a href="#">List of charges</a>
              </li>
              <li>
                <a href="#">Downloads & resources</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Market overview</a>
              </li>
              <li>
                <a href="#">How to file a complaint?</a>
              </li>
              <li>
                <a href="#">Status of your complaints</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Account</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Open an account</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="paragraph">
          <p>
            SoftSell Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through SoftSell Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through SoftSell Commodities Pvt.
            Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
            Registered Address:SoftSella Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to{" "}
            <a href="#">complaints@SoftSell.com </a>, for DP related to
            dp@SoftSell.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by <a href="#"> SEBI | ICF </a>
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="#">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            nvestments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of SoftSell and offering such services, please
            <a href=""> create a ticket here. </a>
          </p>
        </div>
        <div className="bottom-links text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:underline">
              NSE
            </a>
            <a href="#" className="hover:underline">
              BSE
            </a>
            <a href="#" className="hover:underline">
              MCX
            </a>
            <a href="#" className="hover:underline">
              Terms & conditions
            </a>
            <a href="#" className="hover:underline">
              Policies & procedures
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Disclosure
            </a>
            <a href="#" className="hover:underline">
              For investor's attention
            </a>
            <a href="#" className="hover:underline">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
