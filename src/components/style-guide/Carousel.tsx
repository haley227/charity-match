import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../layout/Section';
import ArrowLeft from '../../images/icons/arrow-left.inline.svg';
import ArrowRight from '../../images/icons/arrow-right.inline.svg';
import { media } from '../../includes/breakpoints';
import { colors } from '../../includes/style';
import { graphql, useStaticQuery } from 'gatsby';
import PlainImage from '../utils/PlainImage';
import Container from '../layout/Container';

const StyledSection = styled(Section)`
  background: ${colors.silver};
  text-align: center;

  .swiper{
    --swiper-pagination-bullet-horizontal-gap: 4px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 460px;
    position: relative;
  }

  .img-wrapper{
    ${media.mobile`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

    img{
      margin: auto;
    }
  }

  .swiper-pagination{
    position: static;
    order: 2;
    margin-top: 16px;

    .swiper-pagination-bullet-active{
      background-color: ${colors.orange};
    }
  }

  .arrow-btn{
    background: white;
    color: ${colors.orange};
    border-radius: 50%;
    border: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &.swiper-slide-prev {
      left: 4px ;
    }

    &.swiper-slide-next {
      right : 4px;
    }

    ${media.mobile`
      display: flex;
    `}

    &:hover{
      background-color: rgb(255, 224, 219);
    }

    &:active{
      background-color: rgb(254, 199, 189);
    }

    &:disabled,
    &[aria-disabled="true"]{
      background-color: rgb(247, 247, 247);
      color: rgb(178, 178, 178);
      cursor: pointer;
    }
  }
`;

// See https://swiperjs.com/react#use-swiper
function SlidePrevButton({ disabled }: { disabled?: boolean }) {
  return (
    <button aria-label="Previous Slide" type="button" className="arrow-btn swiper-slide-prev" disabled={disabled ?? false}><ArrowLeft /></button>
  );
}
function SlideNextButton({ disabled }: { disabled?: boolean }) {
  return (
    <button aria-label="Next Slide" type="button" className="arrow-btn swiper-slide-next" disabled={disabled ?? false}><ArrowRight /></button>
  );
}

export default function Carousel() {
  const data = useStaticQuery(graphql`
    query pictureImagesQuery {
      picture1: file(relativePath: {eq: "home/wow.jpg"}){
        ...picture
      }
    }
    fragment picture on File {
      img: childImageSharp {
        gatsbyImageData(layout: FIXED, width: 250, quality: 90)
      }
    }
  `);

  return <StyledSection>
    <Container>
      <h1>Carousels</h1>
      <Swiper
        modules={[Pagination, A11y, Navigation]}
        className="carousel"
        spaceBetween={10}
        // speed={2500}
        navigation= {{
          nextEl: '.arrow-btn.swiper-slide-next',
          prevEl: '.arrow-btn.swiper-slide-prev',
        }}
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <div className="swiper-controls">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
        <SwiperSlide>
          <div className="slide-copy">
            <h2>Slide 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores pariatur maiores, molestiae tempore vel quaerat deserunt at natus sint reprehenderit fuga aliquam provident dolorem voluptas labore accusamus ea nemo?</p>
          </div>
          <div className="img-wrapper">
            <PlainImage imgData={data.picture1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-copy">
            <h2>Slide 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores pariatur maiores, molestiae tempore vel quaerat deserunt at natus sint reprehenderit fuga aliquam provident dolorem voluptas labore accusamus ea nemo?</p>
          </div>
          <div className="img-wrapper">
            <PlainImage imgData={data.picture1} />
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </Container>
  </StyledSection>;
}
