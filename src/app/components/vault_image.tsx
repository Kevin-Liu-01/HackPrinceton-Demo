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
      className={`absolute h-[${props.height}] w-[${props.width}] left-[${props.left}] right-[${props.right}] top-[${props.top}] bottom-[${props.down}] `}
    >
      <Image
        src={props.url}
        alt="Vault"
        fill={true}
        className={`${props.invert} z-10 p-5`}
        style={{
          transform: `rotate(${props.rotation}deg)`,
          transition: "left 0.1s ease-out, transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default VaultImage;
