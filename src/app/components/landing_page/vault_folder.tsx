import Image from "next/image";

interface Folder {
  name: string;
  color: string;
  link: string;
}

const VaultFolder = (props: { folder: Folder }) => {
  return (
    <a
      href={`#${props.folder.name.toLowerCase()}`}
      className={`${props.folder.color} h-full relative drop-shadow-xl border border-black flex text-white font-bold cursor-pointer transition-all duration-200 group-hover:scale-110 group-hover:rotate-2 group-hover:-translate-y-3`}
    >
      {/* Folder Tab */}
      <div
        className={`${props.folder.color} mt-[-3rem] ml-[-1px] border-t border-x border-black h-12 rounded-t-xl`}
      >
        <span className="p-2 m-4 border border-black rounded-xl bg-white text-black font-[family-name:var(--font-geist-mono)]">
          {props.folder.name}
        </span>
      </div>

      {/* Folder Image */}
      <div className="h-full max-h-12">
        <Image
          src={props.folder.link}
          alt={props.folder.name + " Folder"}
          fill={true}
          priority
          className="object-cover pb-8 object-right border border-black m-4 fill-white rounded-xl"
        />
      </div>
    </a>
  );
};

export default VaultFolder;
