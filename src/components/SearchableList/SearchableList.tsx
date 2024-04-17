import { ChangeEvent, ReactNode, useRef, useState } from 'react';

type SearchableListProps<T> = {
	items: T[];
	itemKeyFn: (item: T) => string;
	children: (item: T) => JSX.Element | ReactNode;
};

export default function SearchableList<T>({
	items,
	itemKeyFn,
	children,
}: SearchableListProps<T>) {
	const lastChange = useRef<null | number>();
	const [searchTerm, setSearchTerm] = useState('');

	const searchResults = items.filter(
		item =>
			JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())

		// works only for strings
		// item.toString().toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (lastChange.current) {
			clearTimeout(lastChange.current);
		}

		lastChange.current = setTimeout(() => {
			lastChange.current = null;
			setSearchTerm(event.target.value);
		}, 300);
	};
	return (
		<div className='searchable-list'>
			<input
				type='search'
				placeholder='Search a place...'
				onChange={handleChange}
			/>
			<ul>
				{searchResults.map(item => (
					<li key={itemKeyFn(item)}>{children(item)}</li>
				))}
			</ul>
		</div>
	);
}
