import { createContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

export const AccordionContext = createContext({});

const Accordion = ({ children, className }) => {
	const [openItemId, setOpenItemId] = useState();

	const toggleItem = (id: number) => {
		setOpenItemId(prevId => (prevId === id ? 0 : id));
	};

	const contextValue = {
		openItemId,
		toggleItem,
	};
	return (
		<AccordionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccordionContext.Provider>
	);
};

export default Accordion;

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
