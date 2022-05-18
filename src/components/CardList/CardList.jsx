import Card from './Card/Card'
import React from 'react';
import { movies$ } from '../../data/movies';
import { removeDuplicatedData } from '../../helpers/functions';

const CardList = () => {

    const [films, setFilms] = React.useState(undefined);

    React.useEffect(() => {
        if (!!films && films.length > 0) {
            console.log({films})
        } else {
            // Reloading the films, better for testing
            (async () => {
                let res = await movies$;
                res = removeDuplicatedData(res)
                setFilms([...res])
            })()
        }
    }, [films])

    const handleOnClick = (film) => {
        setFilms([...films.filter((el) => el.title !== film.title && el.id !== film.id)])
    }

    return (
        <div className='card-list' style={{ display: 'grid', gap: 20}}>
            {
                films && films.length > 0 ? films.map((item, index) => (
                    <Card key={index}
                        film={{ ...item }}
                        onClick={handleOnClick} />
                )) : <p>Loading...</p>
            }
        </div>
    )
}

export default React.memo(CardList);