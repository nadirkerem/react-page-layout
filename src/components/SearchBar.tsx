export default function SearchBar({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="h-10 w-full border-x border-b">
      <input
        type="text"
        placeholder="Search..."
        className="h-full w-full px-3"
        onKeyUp={(e) => setSearch(e.currentTarget.value)}
      />
    </div>
  );
}
