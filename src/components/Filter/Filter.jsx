import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

export const Filter = () => {
	const defaultValue = useSelector(state => state.contacts.filter);
	const dispatch = useDispatch();

	const findContact = ({ target: { value } }) => dispatch(setFilter(value));
	return (
		<label htmlFor="filter" className={css.label}>
			Find contacts by name
			<input
				type="text"
				id="filter"
				name="filter"
				className={css.input}
				onInput={findContact}
				value={defaultValue}
			/>
		</label>
	);
};
