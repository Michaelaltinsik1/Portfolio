interface LoaderProps {
  isDotLoader?: boolean;
}
const Loader = ({ isDotLoader = true }: LoaderProps) => {
  return (
    <>
      {isDotLoader ? (
        <div className="flex justify-center items-center">
          <div className="relative flex">
            <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-loader "></div>
            <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-loader"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-loader"></div>
          </div>
        </div>
      ) : (
        <span className="w-[64px] h-[64px] border-[8px] border-solid border-b-[transparent] rounded-[50%] inline-block box-border animate-spin border-gray-900"></span>
      )}
    </>
  );
};
export default Loader;
