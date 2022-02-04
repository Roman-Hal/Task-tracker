import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';


/*const Header = () => {
  return <div></div>;
};*/

const Header = ({ title, onAdd, showAdd }) => {
/*const onClick = () => {
    console.log('click')
}*/
    const location = useLocation();


    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

/*<Button color='green' text='hello' />
            <Button color='blue' text='hello2' />*/
//styling example
/*const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{ color: 'red', backgroundColor: 'black'}}>{title}</h1>
        </header>
    )
}*/

/*const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}

//another way how to style
const headingStyle = {
color: 'red',
backgroundColor: 'black'
}*/

/*const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}*/

//prototype
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//default props
Header.defaultProps = {
    title: 'Task Tracker',
};

//<h1>Task Tracker</h1>
export default Header;
