// Lettuce images
import LettuceImg from '../assets/lettuce.jpg';
import SpinachImg from '../assets/spinach.jpg';
import ArugulaImg from '../assets/aurgula.jpg';
import MixedGreensImg from '../assets/mixed-greens.jpg';

// Topping images
import ToppingImg from '../assets/toppings.jpg';
import TomatoImg from '../assets/tomato.jpg';
import FetaCheeseImg from '../assets/feta-cheese.jpg';
import CucumberImg from '../assets/cucumber.jpg';
import PineappleImg from '../assets/pineapple.jpg';
import OnionImg from '../assets/onion.jpg';
import GreenPepperImg from '../assets/green-pepper.jpg';
import PickleImg from '../assets/pickle.jpg';
import CheddarCheeseImg from '../assets/cheddar-cheese.jpg';

// Dressing images
import DressingImg from '../assets/dressing.jpg';
import HouseDressingImg from '../assets/house-dressing.jpg';
import RanchImg from '../assets/ranch.png';
import HoneyMustardImg from '../assets/honey-mustard.jpg';

export const ingredients = [
	{
		id: '1',
		name: 'Lettuce',
		img: LettuceImg,
		items: [
			{ id: '1a', name: 'Spinach', img: SpinachImg },
			{ id: '1b', name: 'Arugula', img: ArugulaImg },
			{ id: '1c', name: 'Mixed Greens', img: MixedGreensImg },
		]
	},
	{
		id: '2',
		name: 'Toppings',
		img: ToppingImg,
		items: [
			{ id: '2a', name: 'Tomato', img: TomatoImg },
			{ id: '2b', name: 'Feta cheese', img: FetaCheeseImg },
			{ id: '2c', name: 'Cucumber', img: CucumberImg },
			{ id: '2d', name: 'Pineapple', img: PineappleImg },
			{ id: '2e', name: 'Onion', img: OnionImg },
			{ id: '2f', name: 'Green pepper', img: GreenPepperImg },
			{ id: '2g', name: 'Pickle', img: PickleImg },
			{ id: '2h', name: 'Cheddar cheese', img: CheddarCheeseImg }
		]
	},
	{
		id: '3',
		name: 'Dressings',
		img: DressingImg,
		items: [
			{ id: '3a', name: 'House dressing', img: HouseDressingImg },
			{ id: '3b', name: 'Ranch', img: RanchImg },
			{ id: '3c', name: 'Honey mustard', img: HoneyMustardImg },
		]
	}
];
