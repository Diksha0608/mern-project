import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = props => {
    if(props.items.length === 0){
        return <div className='place-list center'>
            <Card>
                <h2>No places found may be create one?</h2>
                <button>Share places</button>
            </Card>
        </div>
    }
    return <ul className="place-list">
        {props.items.map(place => 
        <PlaceItem
         key={place.id}
         id={place.id}
         title={place.title} 
         address={place.address}
         imageUrl={place.imageUrl}
         description={place.description}
         creatorId={place.creator}
         coordinates={place.location}

         />)}
    </ul>
}

export default PlaceList;
