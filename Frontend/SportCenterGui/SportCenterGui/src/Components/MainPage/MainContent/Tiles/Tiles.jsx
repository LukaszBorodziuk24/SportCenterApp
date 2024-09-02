import React from 'react';
import './Tiles.css';
import Tile from "./Tile/Tile.jsx";
import {Container} from "react-bootstrap";

const tileData = [
    {
        size: { width: '58.8%', height: '42%' },
        position: { bottom: '0', left: '0' },
        content: <div>Content 1</div>
    },
    {
        size: { width: '58.8%', height: '40%' },
        position: { top: '0', left: '0' },
        content: <img className={"img-fluid"} src={""} alt={"Content 2"}/>
    },
    {
        size: { width: '30%', height: '55%' },
        position: { top: '0', right: '0' },
        content: <div >Content 3</div>
    },
    {
        size: { width: '30%', height: '28%' },
        position: { bottom: '0', right: '0' },
        content: <div >Content 4</div>
    }
];

const Tiles = () => {
    return (
        <div className="tiles-container col-7">
            {tileData.map((tile, index) => (
                <Tile key={index} size={tile.size} position={tile.position}>
                    {tile.content}
                </Tile>
            ))}
        </div>
    );
};

export default Tiles;
