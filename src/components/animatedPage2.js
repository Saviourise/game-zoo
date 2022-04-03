import './animatedPage2.css'
import {useEffect} from 'react'
import img1 from '../assets/gamezone_Images/call of duty advanced warfare.png'
import img2 from '../assets/gamezone_Images/cyberpunk.png'
import img3 from '../assets/gamezone_Images/assasian creed revelations.png'

function AnimatedPage2() {

    // const plusSlides = (n) => {
    //     //showSlides(slideIndex += n);
    // }

    

    // const showSlides = () => {
    //     var i;
    //     var slides = document.getElementsByClassName("big-text");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) { slideIndex = 1 }
    //     slides[slideIndex - 1].style.display = "flex";
    //     setTimeout(showSlides, 5000); // Change image every 2 seconds
    // }

    useEffect(() => {
        let slideIndex = 0;

        const showSlides = () => {
            var i;
            var slides = document.getElementsByClassName("big-text");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "flex";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }

        showSlides(slideIndex);
    })

    return (
        <div className='anime-2'>
        <div className='animated-body-2'>
            <div className="section-1-body">
                <div className="big-text-container">
                    <div className="big-text-1 big-text">
                        <div className='text'>
                            <p className='text-p'>CALL OF DUTY: ADVANCED WARFARE</p>
                            <p className='text-p-2'>GENRE: <span className="text-p-2-span">ACTION</span></p>
                        </div>
                        <div className='image'>
                            <img src={img1} className="img-animated-2-1"/>
                        </div>
                    </div>
                    <div className="big-text-2 big-text">
                        <div className='text'>
                            <p className='text-p'>CYBERPUNK</p>
                            <p className='text-p-2'>GENRE: <span className="text-p-2-span">ACTION</span></p>
                        </div>
                        <div className='image'>
                            <img src={img2} className="img-animated-2-2"/>
                        </div>
                    </div>
                    <div className="big-text-3 big-text">
                        <div className='text'>
                            <p className='text-p'>ASSASIN CREED REVELATIONS</p>
                            <p className='text-p-2'>GENRE: <span className="text-p-2-span">ACTION</span></p>
                        </div>
                        <div className='image'>
                            <img src={img3} className="img-animated-2-3"/>
                        </div>
                    </div>
                    
                </div>
                {/* <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                <a className="next" oncClick={plusSlides(1)}>&#10095;</a> */}
            </div>
            
        </div>
        <div>
    </div>
    </div>
    )
}

export default AnimatedPage2;