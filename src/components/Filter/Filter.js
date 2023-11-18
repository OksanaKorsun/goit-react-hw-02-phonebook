export const Filter = ({filter,  onUpdateFilter}) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onUpdateFilter} required />
    </>
  );
};
