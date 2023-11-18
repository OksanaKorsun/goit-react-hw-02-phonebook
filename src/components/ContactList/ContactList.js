export const ContactList = ({ items, onDelete}) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number} <button type='button' onClick={()=> onDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
