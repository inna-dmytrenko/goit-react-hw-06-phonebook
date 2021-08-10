function PhoneBookFilter({ onSetFilter, filterValue }) {
  return (
    <label>
      <p>Filter contacts by name: </p>
      <input
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
        placeholder="Name"
      />
    </label>
  );
}

export default PhoneBookFilter;
