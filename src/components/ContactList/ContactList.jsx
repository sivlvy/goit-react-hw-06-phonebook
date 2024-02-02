import css from './ContactList.module.css';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
	const contacts = useSelector(state => state.contacts.contacts);
	const filter = useSelector(state => state.contacts.filter);

	const getVisibleContacts = (contacts, filter) => {
		if (!filter) {
			return contacts;
		}
		return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
	};

	const visibleContacts = getVisibleContacts(contacts, filter);
	return (
		<ul className={css.contact_list}>
			{visibleContacts.map(({ id, name, number }) => {
				return <ContactItem key={id} id={id} name={name} number={number} />;
			})}
		</ul>
	);
};
