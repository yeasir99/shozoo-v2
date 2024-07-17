'use client';
import { useReducer, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import Slides from './Slides';
import Slide from './Slide';
import slideInfo from '@/data/slideInfo';
import carouselReducer from './carouselReducer';
import SlideNav from './SlideNav';
import SlideNavItem from './SlideNavItem';
import Controls from './Controls';
import IconButton from './IconButton';
import SpacerGif from './SpacerGif';
import ProgressBar from './ProgressBar';

const CarouselContainer = () => {
  const SLIDE_DURATION = 6000;
  const [state, dispatch] = useReducer(carouselReducer, {
    currentIndex: 0,
    isPlaying: true,
    takeFocus: false,
  });
  useEffect(() => {
    if (state.isPlaying) {
      let timeout = setTimeout(() => {
        dispatch({ type: 'PROGRESS', length: slideInfo.length });
      }, SLIDE_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [state.currentIndex, state.isPlaying]);

  useEffect(() => {
    if (state.takeFocus) {
      dispatch({ type: 'UNSET_FOCUS' });
    }
  }, [state.takeFocus]);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 h-screen">
      <Slides>
        {slideInfo.map((data, index) => (
          <Slide
            key={index}
            id={`image-${index}`}
            image={data.img}
            title={data.title}
            isCurrent={index === state.currentIndex}
            takeFocus={state.takeFocus}
            children={data.content}
          />
        ))}
        <SlideNav>
          {slideInfo.map((slide, index) => (
            <SlideNavItem
              key={index}
              isCurrent={index === state.currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                dispatch({ type: 'GOTO', index });
              }}
            />
          ))}
        </SlideNav>
        {/* <Controls>
          {state.isPlaying ? (
            <IconButton
              aria-label="Pause"
              onClick={() => {
                dispatch({ type: 'PAUSE' });
              }}
              children={<FaPause />}
            />
          ) : (
            <IconButton
              aria-label="Play"
              onClick={() => {
                dispatch({ type: 'PLAY' });
              }}
              children={<FaPlay />}
            />
          )}
          <SpacerGif width="10px" />
          <IconButton
            aria-label="Previous Slide"
            onClick={() => {
              dispatch({ type: 'PREV', length: slideInfo.length });
            }}
            children={<FaBackward />}
          />
          <IconButton
            aria-label="Next Slide"
            onClick={() => {
              dispatch({ type: 'NEXT', length: slideInfo.length });
            }}
            children={<FaForward />}
          />
        </Controls> */}
      </Slides>
    </div>
  );
};

export default CarouselContainer;
