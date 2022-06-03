import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Places of interest</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">{`B&Bs`}</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All destinations</li>
          <li className="fListItem">Discover</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles</li>
          <li className="fListItem">Travel communities</li>
          <li className="fListItem">Seasonal and holiday deals</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">flight finder</li>
          <li className="fListItem">restaurant reservations</li>
          <li className="fListItem">Booking.com for Travel agents</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID-19) FAQS</li>
          <li className="fListItem">About Booking.com</li>
          <li className="fListItem">Customer Service help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">investor relations</li>
          <li className="fListItem">{`Terms & conditions`}</li>
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">How We WOrk</li>
          <li className="fListItem">{`Privacy & cookie statement`}</li>
          <li className="fListItem">Corporate contact</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Richibooking.com™. All rights reserved.</div>
    </div>
  )
}

export default Footer