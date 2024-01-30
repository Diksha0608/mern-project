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
    title:"Almere",
    description:"My Home",
    imageUrl:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xDbEvrm739beBz0F2EyrOQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=10.54209&pitch=0&thumbfov=100",
    address:"Almere Genevestraat",
    location:{
        lat:52.397092,
        lng:5.2786972
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
