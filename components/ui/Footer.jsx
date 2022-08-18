import SocialMediaIcons from "../utils/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-dark text-white px-6 md:px-10 lg:px-20 xl:px-24 py-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>Copyright © 2022 Dipendra Paudel. All Rights Reserved.</div>
          <div>
            <SocialMediaIcons classes="flex space-x-4" footer={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
