import Image from "next/image";

const ImageSplitAnimation = () => {
  return (
    <div className="w-full">
      <div className="author-image relative mx-auto">
        <Image
          src="/images/profile.jpg"
          alt="Dipendra Paudel"
          layout="fill"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ImageSplitAnimation;
