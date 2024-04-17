import { useContext } from 'react';
import { AccordionContext } from '../components/Accordion/Accordion';

export function useAccordionContext() {
	const ctx = useContext(AccordionContext);

	if (!ctx) {
		throw new Error(
			'Accordion-related components must be wrapped in an Accordion component'
		);
	}

	return ctx;
}
