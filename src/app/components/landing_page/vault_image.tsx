import Image from "next/image";

interface ImageProps {
  url: string;
  height: string;
  width: string;
  left: string;
  right: string;
  top: string;
  down: string;
  rotation: number;
  invert: string;
  alt: string;
}

const VaultImage = (props: ImageProps) => {
  return (
    <div
      className={`absolute ${props.height} ${props.width} ${props.left} ${props.right} ${props.top} ${props.down}`}
    >
      <Image
        src={props.url}
        alt="Vault"
        fill={true}
        sizes={"100%"}
        className={`${props.invert} z-10 p-5 drop-shadow-lg`}
        priority
        style={{
          transform: `rotate(${props.rotation}deg)`,
          transition: "left 0.1s ease-out, transform 0.1s ease-out",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default VaultImage;
