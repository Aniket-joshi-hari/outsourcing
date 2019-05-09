import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import './ContentExplore.css';

class AuthorContainer extends Component {
    render(){
        const { authors } = this.props;
        return(
            <div>
            <h2>Authors</h2>
                <CarouselProvider totalSlides={authors.length / 2} step={1}>
                <div style={{ width: '100%' }}>
                    <ButtonBack className="authorBackSlideButton">
                        <IconButton aria-label="back">
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </ButtonBack>
                    <ButtonNext className="authorNextSlideButton">
                        <IconButton aria-label="next">
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </ButtonNext>
                </div>
                <Slider style={{ height: '200px', width: '98%' }}>
                    {authors.map(tile => (
                    <Slide
                        style={{ textAlign: 'center', height: '200px', width: '210px' }}
                    >
                        <Link
                        to={{
                            pathname: '/author-details',
                            state: { authorId: tile.authorId },
                        }}
                        >
                        <div className="authorImageContainer">
                            <img src={tile.authorImageURL} alt={tile.authorName} />
                        </div>
                        <span>{tile.authorName}</span>
                        </Link>
                    </Slide>
                    ))}
                </Slider>
                </CarouselProvider>
            </div>
        )
    }
}

export default AuthorContainer;