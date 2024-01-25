import React from 'react';
import CommentHome from './commentHome';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
function Comments() {
  const { RestaurantFilial} = useContext(MainContext);
  return (
    <div>
        <div className="comment my-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-12">
                <CommentHome/>
              </div>
              <div className="col-xl-6 col-12">
              <div className="write-comment">
              <form action="#" className="form-general">
                  <input type="text" placeholder='Name *' />
                  <input type="email" placeholder='Email *' />
                  <select>
                    <option disabled defaultValue>Select location</option>
                    {
                      RestaurantFilial.map(filial => (
                        <option key={filial.id} value={filial.title}>{filial.title}</option>
                      ))
                    }
                  </select>
                  <textarea placeholder='Your comment'></textarea>
                  <button type='submit' className='btn-general active my-5'>Send</button>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Comments;
