interface SearchInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  value,
  onChange,
}): JSX.Element => {
  return (
    <div className={`relative ${className}`}>
      <i className="icon-magnifier absolute left-1 top-1 h-9 text-gray-500 text-xl"></i>
      <input
        onChange={(e): void => onChange && onChange(e.target.value)}
        name="search-input"
        value={value}
        className="h-9 px-8 rounded block w-full"
      />
    </div>
  );
};

export default SearchInput;
