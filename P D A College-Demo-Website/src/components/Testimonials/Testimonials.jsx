import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/ast.jpg'
import user_2 from '../../assets/shweta.jpg'
import user_3 from '../../assets/bhag.jpg'
import user_4 from '../../assets/shrd.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
         

    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Anjali</h3>
                                <span>TCS, Bengaluru</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at PDA was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Shweta</h3>
                                <span>Infosys, Bengaluru</span>
                            </div>
                        </div>
                        <p>Opting to pursue my education at PDA Institute turned out to be an exceptional decision in my academic path. The supportive community, top-notch facilities have genuinely surpassed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Poonam</h3>
                                <span>Vipro, Pune</span>
                            </div>
                        </div>
                        <p>The inclusive community, cutting-edge facilities, and unwavering commitment to academic excellence have exceeded my expectations. This institution has provided a solid foundation for personal growth and development.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Shraddha</h3>
                                <span>Tech Mahindra, Hyderabad</span>
                            </div>
                        </div>
                        <p>PDA College has been a transformative move for my career. The strong support, advanced resources, and exceptional placement opportunities have surpassed my expectations, making it a strategic choice for a successful future.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
