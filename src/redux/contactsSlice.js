import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export const contactsSlice = createSlice({
	name: 'phonebook',
	initialState: {
		contacts: [],
		filter: '',
	},

	reducers: {
		addContact(state, action) {
			const newContact = action.payload;
			const newName = newContact.name;
			const { contacts } = state;

			const existsContact = contacts.some(
				({ name }) => name.toLowerCase() === newName.toLowerCase()
			);

			if (existsContact) {
				Notify.failure(`${newName} is already in contacts`);
			}

			newContact.id = nanoid();

			contacts.push(newContact);
		},

		deleteContact(state, action) {
			const { contacts } = state;
			const idDeleteContact = action.payload;

			const index = contacts.findIndex(({ id }) => id !== idDeleteContact);

			contacts.splice(index, 1);
		},

		setFilter(state, action) {
			state.filter = action.payload.toLowerCase();
		},
	},
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
