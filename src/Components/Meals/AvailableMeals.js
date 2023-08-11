import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DummyMeals = [
  {
    id: "m1",
    name: "Mix Veg",
    description: "a mixture of many vegetables  ",
    price: 29.33,
  },
  {
    id: "m2",
    name: "Mashroom Paneer",
    description: "a paneer with some special ingredients ",
    price: 22.43,
  },
  {
    id: "m3",
    name: "Burger",
    description: "a  paneer burger with crunch special  ",
    price: 24.39,
  },
  {
    id: "m4",
    name: "Rice",
    description: "rice  with zeera  ",
    price: 32.63,
  },
];

const AvailableMeals = () => {
  const MealsList = DummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
