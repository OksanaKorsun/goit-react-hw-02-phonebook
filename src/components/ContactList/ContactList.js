export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            {item.name}: {item.number} <button type='button'>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
