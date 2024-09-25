interface Folder {
  name: string;
  color: string;
}

const VaultFolder = (props: { folder: Folder }) => {
  return (
    <>
      <a
        href={`#${props.folder.name}`}
        className={`h-full relative drop-shadow-lg w-full border-l-4 border-t-4 border-black flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-3`}
        style={{ backgroundColor: props.folder.color }}
      >
        <img
          src="/images/crowd.jpg"
          alt="Folder"
          className="absolute border-4 border-black h-full w-full m-4 rounded-xl top-0 left-0"
        />
        {/* Folder Tab */}
        <div
          className="absolute -top-12 left-[-4px] transform border-t-4 border-x-4 border-black h-12 bg-black rounded-t-lg"
          style={{ backgroundColor: props.folder.color }}
        >
          <span className="p-2 m-4 border-4 border-black rounded-xl bg-white text-black">
            {props.folder.name}
          </span>
        </div>
      </a>
    </>
  );
};

export default VaultFolder;
