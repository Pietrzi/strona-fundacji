import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <p onClick={props.click}>Polityka Prywatności</p>
            <p onClick={props.klik}>Polityka Cookies</p>
        </footer>
    )
}

export default Footer
