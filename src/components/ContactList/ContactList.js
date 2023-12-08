import { ButtonItem, List, ListItem, Text } from "./ContactList.Styled";

const ContactList = ({contacts, onDeleteContact}) => (
<List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Text>{name} {number}</Text>
        <ButtonItem onClick={() => onDeleteContact(id)} >Delete</ButtonItem>
      </ListItem>
    ))}
</List>
)

export default ContactList;