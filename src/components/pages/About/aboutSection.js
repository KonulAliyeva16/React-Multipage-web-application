import React from 'react';
import SectionTitle from '../Title/sectionTitle';

function aboutSection() {
  return (
    <div>
      <section className='about'>
        <div className="container">
          <div className="row">
            <SectionTitle title={'About Us'} />
            <div className="col-lg-6 col-12">
              <div className='about-img'>
                < img src={require('../../../assets/image/about/about-img.png')} alt="baskent" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div class="content">
                <div class="text">
                  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio ipsum ab, laborum, placeat at eos vel cupiditate dignissimos saepe perferendis. Eligendi ipsa, porro, iste quia quidem alias rerum esse unde odit nobis nostrum animi nesciunt expedita cupiditate eius. Incidunt exercitationem culpa quas saepe blanditiis vero modi consequatur. Dignissimos, necessitatibus repellendus error saepe nam numquam iste libero! Facere saepe, rerum molestiae optio placeat quod maiores doloribus modi sed eius fugiat magni facilis minima fuga consectetur ipsa officiis corrupti non odit consequuntur esse repellendus nesciunt. Dolor pariatur nisi veniam eaque reprehenderit nostrum est laborum, iusto nesciunt consectetur temporibus sit, expedita aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora magnam tenetur quos, temporibus minima mollitia atque veritatis vero iste harum repellat provident, nostrum nihil nulla! Nesciunt saepe iusto, ipsum nostrum illo est impedit aspernatur nisi velit vero doloribus cupiditate.
                    <br />  BAŞKENT - "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus praesentium ratione, quod animi quo!"</p>
                </div>
                <a class="btn-general active" href="/about">More</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutSection;
