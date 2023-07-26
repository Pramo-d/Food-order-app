import react, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals2.jpg';
const Header=()=>{

    return(
        <Fragment>
           <header className={classes.header}>
             <h2>React Meals</h2>
              <HeaderCartButton/>
           </header>
           <div className={classes['main-image']}>
            <img src={mealsImage} alt="this is food meals image"></img>
           </div>
        </Fragment>
     
    )
}
export default Header;