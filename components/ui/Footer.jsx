import SocialMediaIcons from "../utils/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-dark text-white px-6 md:px-10 lg:px-20 xl:px-24 py-6 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="pt-3 md:pt-0">
            Copyright © 2022 Dipendra Paudel. All Rights Reserved.
          </div>
          <div>
            <SocialMediaIcons
              classes="flex space-x-2 md:space-x-4"
              footer={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
