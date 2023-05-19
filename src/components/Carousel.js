import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'
import loveOfSports from '../app/assets/img/loveOfSports.webp'
import educationInPerformance from '../app/assets/img/educationInPerformance.jpg'
import developmentOfABusiness from '../app/assets/img/developmentOfABusiness.webp'


const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Card>
                        <CardImg src={loveOfSports} alt='3 girls celebrating a soccer goal' />
                        <CardBody>
                            <CardTitle>A passion for the game</CardTitle>
                            <CardText>From humble beginnings, our journey begins from a love of sports and all of its aspects. FitFreakz came to be from a dedication and a drive to improve performance from our own endeavours as sports practitioners.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg src={educationInPerformance} alt='students performing a VO2 max stress test' />
                        <CardBody>
                            <CardTitle>An education to improve performance</CardTitle>
                            <CardText>From our love of sports came a drive to help others achieve greater heights in there atheletic journey by aquiring an education in exercise physiology, leading to the knowledge that provides the results that top-notch athletes demand</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardImg src={developmentOfABusiness} alt='students performing a VO2 max stress test' />
                        <CardBody>
                            <CardTitle>Development of A World Class Coaching business</CardTitle>
                            <CardText>From our youth, to our education, our drive and dedication to outperforming the competition has led us to the creation of FitFreakz to allow us to teach others how to gain an advantage wherever they need.With world class experience and education, our trainers are the best of the best!</CardText>
                        </CardBody>
                    </Card>
                </div>
            </Slider>
        </div>

    );
};

export default Carousel;