const SearchBox = () => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        className="relative top-40 w-96 p-4 rounded-lg"
        placeholder="Enter your City"
      />
      <button className="relative top-40 left-4 p-3 rounded-lg bg-blue-500 hover:opacity-90 text-white">
        SEARCH
      </button>
    </div>
  );
};

export default SearchBox;
