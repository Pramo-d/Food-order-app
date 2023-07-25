import react, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header=()=>{

    return(
        <Fragment>
           <header className={classes.header}>
             <h2>React Meals</h2>
              <HeaderCartButton/>
           </header>
           <div className={classes['main-image']}>
            <img ></img>
           </div>
        </Fragment>
     
    )
}
export default Header;