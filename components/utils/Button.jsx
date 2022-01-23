import Link from "next/link";

const Button = ({ label, url }) => {
  return (
    <Link href={url}>
      <div className="bg-primary px-6 py-3 rounded-full cursor-pointer text-white">
        {label}
      </div>
    </Link>
  );
};

export default Button;
