import React from 'react'
import SectionTitle from '../Title/sectionTitle'
 function Whyus() {
    return (
        <div className='container'>
            <div class="why-us">
                <div class="row">
            <SectionTitle title={'Why Us'} />

                    <div class="col-12 col-md-6 col-xl-4">
                        <div class="item">
                            <img src={require('../../../assets/image/about/small-img/img-1.png')} alt="icon" />
                            <span>Cozy splace</span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
                        <div class="item">
                            <img src={require('../../../assets/image/about/small-img/img-2.png')} alt="icon" />
                            <span>Tasty meals</span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
                        <div class="item">
                            <img src={require('../../../assets/image/about/small-img/img-3.png')} alt="icon" />
                            <span>Friendly service</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Whyus;
