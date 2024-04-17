import { createContext } from 'react';

export const AccordionItemContext = createContext(0);

const AccordionItem = ({ id, className, children }) => {
	return (
		<AccordionItemContext.Provider value={id}>
			<li className={className}>{children}</li>
		</AccordionItemContext.Provider>
	);
};

export default AccordionItem;
