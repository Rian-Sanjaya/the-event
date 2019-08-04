import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.341903147921!2d106.79960821532374!3d-6.218564762639884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sGelora+Bung+Karno+Main+Stadium!5e0!3m2!1sen!2sid!4v1564880576309!5m2!1sen!2sid" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen
        title='location'
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>

    </div>
  )
}

export default Location