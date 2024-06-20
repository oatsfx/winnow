import React from "react";
const pack = require("../../../package.json");

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>
          {pack.name} v{pack.version} - Created by{" "}
          <a href="https://oatsfx.com/" target="_blank">
            @OatsFX
          </a>
        </p>
        <p>
          This tool is not affiliated with Bungie and does not claim any rights
          to their trademarks. Any and all resources related to Bungie and their
          products, like Destiny 2, are used for informational purposes only.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
