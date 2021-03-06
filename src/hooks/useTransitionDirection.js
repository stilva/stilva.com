import {useRef, useContext, useEffect} from 'react';
import {RouterContext} from "@stilva/transitionable-react-router";

const RL = 'page--rl';
const LR = 'page--lr';

export default function useTransitionDirection(transitionstate) {
  const prevTransition = useRef('');
  const prevDirection = useRef('');
  const {currentRoute, previousRoute} = useContext(RouterContext);

  let dirty = prevTransition.current !== transitionstate;

  // first load
  if(previousRoute === '') {
    return '';
  }

  if(dirty) {
    prevTransition.current = transitionstate;
  } else {
    return prevDirection.current;
  }

  const direction = getDirection(transitionstate, previousRoute, currentRoute);
  prevDirection.current = direction;

  return direction;
}

function getDirection(transitionstate, previousRoute, currentRoute) {
  const dirCurr = getSlug(currentRoute);
  const dirPrev = getSlug(previousRoute);

  // this needs fixing...
  if(transitionstate === 'entering') {
    if(dirCurr === 'home') {
      return LR;
    }
    if(dirCurr === 'list') {
      if(dirPrev === 'entry') {
        return LR;
      }
      if(dirPrev === 'home') {
        return RL;
      }
    }
    if(dirCurr === 'entry') {
      return RL;
    }
  } else if(transitionstate === 'exiting') {
    if(dirCurr === 'home') {
      return LR;
    }
    if(dirCurr === 'list') {
      if(dirPrev === 'entry') {
        return LR;
      }
      if(dirPrev === 'home') {
        return RL;
      }
    }
    if(dirCurr === 'entry') {
      return RL;
    }
  }

  return '';
}

function getSlug(route) {
  const pattern = /^\/(work|lab)\/?(.*)?$/i;
  const match = pattern.exec(route);

  if(!match) {
    return 'home'
  }

  return !!match[2] ? 'entry': 'list';
}
