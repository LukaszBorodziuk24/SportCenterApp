import React from 'react';
import './LeftPentagon.css';

const LeftPentagon = ({ onHover, isHovered }) => {
    return (
        <div
            className={`left-pentagon ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => onHover('left')}
            onMouseLeave={() => onHover(null)}
        >
            KICKBOXING
        </div>
    );
}

export default LeftPentagon;
