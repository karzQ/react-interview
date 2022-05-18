import React from 'react';

const Gauge = ({ likes, dislikes }) => {

    const total = likes + dislikes;

    return <div className="card-gauge">
        <div style={{width: "calc()"}}></div>
        <div></div>
    </div>
}

const Card = ({ film, onClick }) => {
    
    // const [film] = React.useState({ ...data });
    
    const handleOnClick = () => {
        onClick(film)
        // console.log({film})
    }

    return (
        <div className='card' style={{ padding: 20, backgroundColor: 'lightgrey', border: '1px solid black'}}>
            <h4 className='card-title' style={{ fontWeight: 'bold' }}>{film?.title}</h4>
            <span className='card-category'>{film?.category}</span>
            <Gauge likes={film?.likes} dislikes={film?.dislikes} />
            <button onClick={() => handleOnClick()}>Remove</button>
        </div>
    )
}

export default React.memo(Card);