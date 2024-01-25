import React from 'react'
import SectionTitle from '../pages/Title/sectionTitle';


function Contact() {
  return (
    <div>
      <div className="contact my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 frame">
              <div className="">
                <form action="#" className="form-general">
                  <SectionTitle title='Contact' />
                  <input type="text" placeholder='Name *' />
                  <input type="text" placeholder='Surname *' />
                  <input type="email" placeholder='Email *' />
                  <input type="email" placeholder='Phone number *' />
                  <input type="email" placeholder='Subject *' />

                  <textarea placeholder='Your messsage'></textarea>
                  <button type='submit' className='btn-general active my-5'>Send</button>
                </form>
              </div>
            </div>
            <div class="col-12 col-xl-6">
              <div class="map">
                <iframe title="map" src="https://www.google.com/maps/d/u/1/embed?mid=1UQoB2Xo9DSiKrUx5V290Dxzny7WCIB0&amp;ehbc=2E312F"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
