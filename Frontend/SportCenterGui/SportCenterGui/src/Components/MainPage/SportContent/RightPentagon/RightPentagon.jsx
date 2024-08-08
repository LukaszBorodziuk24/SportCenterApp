import React from 'react';
import './RightPentagon.css';

const RightPentagon = ({ onHover, isHovered }) => {
    return (
        <div
            className={`right-pentagon ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => onHover('right')}
            onMouseLeave={() => onHover(null)}
        >
            CROSSFIT
        </div>
    );
}

export default RightPentagon;
