import ItemList from '../item-list';
import { ListData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = ListData(ItemList, getAllPeople);
const PlanetList = ListData(ItemList, getAllStarships);
const StarshipList = ListData(ItemList, getAllPlanets);

export {
  PersonList,
  PlanetList,
  StarshipList
}