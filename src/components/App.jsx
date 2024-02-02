import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from 'Section/Section';
export const App = () => {
	return (
		<Section>
			<ContactForm />
			<Filter />
			<ContactList />
		</Section>
	);
};
// import { useState, useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Notify } from 'notiflix';
// import { useDispatch, useSelector } from 'react-redux';

// const LOCALSTORAGE_KEY = 'contacts-key';

// export const App = () => {
// 	const contacts = useSelector(store => store.contacts);

// 	const dispatch = useDispatch();

// 	const [filter, setFilter] = useState('');

// 	const onAddContact = newContact => {
// 		const newName = newContact.name.toLowerCase();
// 		const isCheckedContact = contacts.find(
// 			({ name }) => name.toLowerCase() === newName
// 		);

// 		if (!isCheckedContact) {
// 			newContact.id = nanoid();
// 			const action = addContact(newContact);
// 			dispatch(action);
// 		} else {
// 			Notify.failure(`${newContact.name} is already in contacts`);
// 		}
// 	};

// 	const findContact = ({ target: { value } }) => {
// 		setFilter(value.toLowerCase());
// 	};

// 	const filteredContact = () => {
// 		const suitableContacts = contacts.filter(({ name }) =>
// 			name.toLowerCase().includes(filter)
// 		);

// 		return filter === '' ? contacts : suitableContacts;
// 	};

// 	const onDeleteContact = idDeleteContact => {
// 		dispatch(deleteContact(idDeleteContact));
// 	};

// 	return (
// 		<div className="container">
// 			<h1>Phonebook</h1>
// 			<ContactForm addContact={onAddContact} />
// 			<h2>Contacts</h2>
// 			<Filter findContact={findContact} />
// 			<ContactList
// 				filteredContact={filteredContact()}
// 				deleteContact={onDeleteContact}
// 			/>
// 		</div>
// 	);
// };

// export default App;
