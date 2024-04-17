import { useContext } from 'react';
import { AccordionItemContext } from '../components/Accordion/AccordionItem';

export function useAccordionItemContext() {
	const ctx = useContext(AccordionItemContext);

	if (!ctx) {
		throw new Error(
			'AccordionItem-related components must be wrapped by <Accordion.Item>'
		);
	}

	return ctx;
}
