import { useAccordionContext } from '../../hooks/accordion-context';
import { useAccordionItemContext } from '../../hooks/accordion-item-context';

const AccordionContent = ({ className, children }) => {
	const { openItemId } = useAccordionContext();
	const id = useAccordionItemContext();
	const isOpen = openItemId === id;
	return (
		<div
			className={
				isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
			}
		>
			{children}
		</div>
	);
};

export default AccordionContent;
