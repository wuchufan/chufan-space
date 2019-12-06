import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import GridTest from '../../components/GridTest';
import Pages from '../..//hoc/Pages/Pages';
import classes from '../../sass/main.module.scss';

class HomePage extends Component{

  render(){

    return(
      <Aux>
        <Pages>


        <div className={classes['row']}>
          <h1 className={classes['heading-primary']}>
            This is your Home Page.
          </h1>
          <h1 className={classes['heading-primary']}>
            The Great Master is currently working hard on expanding this universe.
          </h1>
          <GridTest/>
        </div>
            </Pages>
      </Aux>

    );
  }
}

export default HomePage;
