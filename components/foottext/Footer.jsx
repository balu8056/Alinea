import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footerText">
        This website is for informational purposes only, and is not intended to
        serve as a recommendation to buy or sell any security in any account,
        and is not an offer<br></br>
        or sale of a security. They are also not research reports and are not
        intended to serve as the basis for any investment decision. Any
        third-party information<br></br>
        provided therein does not reflect the views of Alinea Invest, LLC. All
        investments involve risk and the past performance of a security or
        financial product does<br></br>not guarantee future results or returns.
        Keep in mind that while diversification may help spread risk, it does
        not assure a profit or protect against loss. There is<br></br> always
        the potential of losing money when you invest in securities or other
        financial products. Investors should consider their investment
        objectives and risks<br></br>carefully before investing. The price of a
        given security may increase or decrease based on market conditions and
        customers may lose money, including their<br></br> original investment.
        Alinea Invest, LLC is not a registered investment adviser or
        broker-dealer.<br></br>
    </p>
    <p className="copyrights">
        Copyright © 2020. All rights reserved by Alinea Invest
    </p>
    </div>
  );
};

export default Footer;
