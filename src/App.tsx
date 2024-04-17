import Accordion from './components/Accordion/Accordion';
import SearchableList from './components/SearchableList/SearchableList';
import Place from './components/Place';
import { PLACES } from './dummy-places';

function App() {
	return (
		<main>
			<section>
				<h2>Why work with us?</h2>

				<Accordion className='accordion'>
					<Accordion.Item id={1} className='accordion-item'>
						<Accordion.Title className={'accordion-item-title'}>
							We got 20 years of experience
						</Accordion.Title>
						<Accordion.Content className={'accordion-item-content'}>
							<article>
								<p>You can't go wrong with us</p>
								<p>We are in the business of planning higly individualized </p>
							</article>
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item id={2} className='accordion-item'>
						<Accordion.Title className={'accordion-item-title'}>
							We are working with local guides
						</Accordion.Title>
						<Accordion.Content className={'accordion-item-content'}>
							<article>
								<p>You can't go wrong with us</p>
								<p>We are in the business of planning higly individualized </p>
							</article>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion>
			</section>
			<section>
				<SearchableList items={PLACES} itemKeyFn={item => item.id}>
					{item => <Place item={item} />}
				</SearchableList>
				<SearchableList
					// write some beautiful places stings in array
					items={[
						'Santorini, Greece',
						'Kyoto, Japan',
						'Banff, Canada',
						'Cinque Terre, Italy',
						'Reykjavik, Iceland',
						'Queenstown, New Zealand',
						'Petra, Jordan',
						'Yosemite, USA',
						'Amalfi Coast, Italy',
						'Bali, Indonesia',
						'Machu Picchu, Peru',
						'Bora Bora, French Polynesia',
						'Cape Town, South Africa',
						'Hallstatt, Austria',
						'Maldives, Indian Ocean',
					]}
					itemKeyFn={item => item}
				>
					{item => <p>{item}</p>}
				</SearchableList>
			</section>
		</main>
	);
}

export default App;
