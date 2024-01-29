import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMYPLACES=[{
    id:"p1",
    title:"Amsterdam",
    description:"one of the most popular place",
    imageUrl:"https://puuramsterdam.nl/wp-content/uploads/2021/10/Amsterdam-Centraal-1-1024x648.jpg",
    address:"Amsterdam Netherlands",
    location:{
        lat:52.3526058,
        lng:4.7606951
    },
    creator:"u1"

},
{
    id:"p2",
    title:"Amsterdam",
    description:"one of the most popular place",
    imageUrl:"https://www.amsterdam.info/sitemedia/photos-800/amsterdam-transport-central-station-public-transport-tram-stop-800x450.jpg",
    address:"Amsterdam Netherlands",
    location:{
        lat:52.3526058,
        lng:4.7606951
    },
    creator:"u2"

},
{
    id:"p3",
    title:"Amsterdam",
    description:"one of the most popular place",
    imageUrl:"https://puuramsterdam.nl/wp-content/uploads/2021/10/Amsterdam-Centraal-1-1024x648.jpg",
    address:"Amsterdam Netherlands",
    location:{
        lat:52.3526058,
        lng:4.7606951
    },
    creator:"u3"

}
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMYPLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces}/>
  
}

export default UserPlaces;
