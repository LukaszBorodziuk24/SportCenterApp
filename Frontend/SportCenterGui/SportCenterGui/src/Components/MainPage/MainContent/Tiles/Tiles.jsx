import React from 'react';
import './Tiles.css';

const tileData = [
    {
        size: {width: '58.8%', height: '42%'},
        position: {bottom: '0', left: '0'},
        content: <div>Content 1</div>
    },
    {
        size: {width: '58.8%', height: '40%'},
        position: {top: '0', left: '0'},
        content: <img className={"img-fluid"} src={""} alt={"Content 2"}/>
    },
    {
        size: {width: '30%', height: '55%'},
        position: {top: '0', right: '0'},
        content: <div>Content 3</div>
    },
    {
        size: {width: '30%', height: '28%'},
        position: {bottom: '0', right: '0'},
        content: <div>Content 4</div>
    }
];

const Tiles = () => {
    return (
        <div className="grid-container col-7">
            <div className={"grid-item item1"}>1</div>
            <div className={"grid-item item2"}>2</div>
            <div className={"grid-item item3"}>3</div>
            <div className={"grid-item item4"}>4</div>
        </div>
    );
};

export default Tiles;
