import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredeint = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredeint = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredeint = (<div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>);
            break;
        case ('meat'):
            ingredeint = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredeint = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingredeint = <div className={classes.Bacon}></div>;
            break;
        case ('salad'):
            ingredeint = <div className={classes.Salad}></div>;
            break;
        default: 
            ingredeint = null;
    }
    return ingredeint;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default burgerIngredient;