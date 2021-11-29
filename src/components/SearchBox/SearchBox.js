import "./SearchBox.css"
const SearchBox = ({placeholder,handleChange}) => {
    return (
        <div>
        <input
          className="SearchBox"
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
        </div>
    )
}

export default SearchBox