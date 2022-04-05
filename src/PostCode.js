import React from "react";

export const distanceToAirport = (lat1, lon1, lat2, lon2, unit) => {
      if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist;
    }
};

const PostCodeCard = props => {
  const { country,nhs_ha,postcode,ccg,longitude, latitude } = props.item;

  return (
    <div>
      <h1>{country}</h1>
      
      <address>
        {nhs_ha}<br></br>
        {postcode}<br></br>
        {ccg}<br></br>
        Longitude: {longitude}<br></br>
        Latitude: {latitude}<br></br>
      </address>
      <br></br>
      <div id="uprightextreme">
        Distance to London Heathrow airport: { distanceToAirport(51.4700223,-0.4542955,latitude, longitude, 'k').toFixed(2) } kilometers
      </div>
    
    </div>
  );
};

export default PostCodeCard;