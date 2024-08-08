import React from 'react';
import './Hourglass.css';

const Hourglass = ({ onHover, isHovered }) => {
    return (
        <div
            className={`hourglass ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => onHover('middle')}
            onMouseLeave={() => onHover(null)}
        >
            GYM
        </div>
    );
}

export default Hourglass;
