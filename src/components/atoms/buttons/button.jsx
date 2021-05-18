import React from 'react';
import './button.scss';

const Button = ({titulo,clase,href}) => {
    return ( 
        <a href={href} className={clase}>{titulo}</a>
     );
}
 
export default Button;