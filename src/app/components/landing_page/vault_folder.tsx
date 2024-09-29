import Image from "next/image";

interface Folder {
  name: string;
  color: string;
  link: string;
}

const VaultFolder = (props: { folder: Folder }) => {
  return (
    <>
      <a
        href={`#${props.folder.name.toLowerCase()}`}
        className={`${props.folder.color} h-full relative drop-shadow-xl w-full border border-black flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-3`}
      >
        <div className="h-full w-full">
          <Image
            src={props.folder.link}
            alt={props.folder.name + " Folder"}
            fill={true}
            priority
            className="absolute object-cover border border-black m-4 fill-white rounded-xl  "
          />
        </div>
        {/* Folder Tab */}
        <div
          className={`${props.folder.color} absolute -top-12 left-[-1px] transform border-t border-x border-black h-12 bg-black rounded-t-xl`}
        >
          <span className="p-2 m-4 border border-black rounded-xl bg-white text-black font-[family-name:var(--font-geist-mono)]">
            {props.folder.name}
          </span>
        </div>
      </a>
    </>
  );
};

export default VaultFolder;
