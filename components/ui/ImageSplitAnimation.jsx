import Image from "next/image";

const ImageSplitAnimation = () => {
  return (
    <div className="w-full">
      <div className="h-80 w-full lg:w-96 hero-section-image relative">
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
