import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const ContactButton = ({ fullWidth, handleClick = () => {} }) => {
  return (
    <Link href="/#contact" passHref={true}>
      <a
        className={`inline-block text-white font-semibold relative overflow-hidden group ${
          fullWidth ? "w-full" : ""
        }`}
        onClick={handleClick}
      >
        <div
          className={`bg-primary py-3 flex space-x-1 ${
            fullWidth ? "w-full justify-center" : "px-8"
          }`}
        >
          <div>
            <EmailOutlinedIcon />
          </div>
          <div className="pt-0.5">Contact</div>
        </div>

        {/* Animation text */}
        <div className="absolute right-full translate-x-full top-0 w-1/2 h-full flex items-center justify-end transition-all duration-700 group-hover:-translate-x-full bg-primary2">
          Con
        </div>
        <div className="absolute left-full -translate-x-full top-0 w-1/2 h-full flex items-center transition-all duration-700 group-hover:translate-x-full bg-primary2">
          tact
        </div>
      </a>
    </Link>
  );
};
