import { Fragment,useState } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

   const shownCartHandler=()=>{
    setCartIsShown (true);
   }

   const hideCartHandler=()=>{
  setCartIsShown(false);
   }
  return (
    <Fragment>
       {cartIsShown && <Cart onClose={hideCartHandler} />  }
      <Header  onShownCart={shownCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
