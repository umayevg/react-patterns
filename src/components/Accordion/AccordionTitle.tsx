import { useAccordionContext } from '../../hooks/accordion-context';
import { useAccordionItemContext } from '../../hooks/accordion-item-context';

const AccordionTitle = ({ className, children }) => {
	const { toggleItem } = useAccordionContext();
	const id = useAccordionItemContext();
	return (
		<h3 className={className} onClick={() => toggleItem(id)}>
			{children}
		</h3>
	);
};

export default AccordionTitle;
