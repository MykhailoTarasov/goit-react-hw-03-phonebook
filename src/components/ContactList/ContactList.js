import { ButtonItem, List, ListItem, Text } from "./ContactList.Styled";
import { FaTrashCan } from "react-icons/fa6";

const ContactList = ({contacts, onDeleteContact}) => (
<List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Text>{name} {number}</Text>
        <ButtonItem onClick={() => onDeleteContact(id)} ><FaTrashCan /></ButtonItem>
      </ListItem>
    ))}
</List>
)

export default ContactList;