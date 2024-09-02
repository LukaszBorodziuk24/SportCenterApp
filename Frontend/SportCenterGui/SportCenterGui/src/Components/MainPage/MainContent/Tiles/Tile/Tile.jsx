import React from 'react';
import './Tile.css';

const Tile = ({ size, position, children }) => {
    const tileStyle = {
        width: size.width,
        height: size.height,
        position: 'absolute',
        ...position
    };

    return (
        <div className="tile" style={tileStyle}>
            {children}
        </div>
    );
};

export default Tile;
