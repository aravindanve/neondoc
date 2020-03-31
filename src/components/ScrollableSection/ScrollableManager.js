import { useState, useEffect } from 'react';
import { debounce } from '../../utils/events';

let targetStates = Object.create(null);
let intersectingTargetIds = [];
let intersectingTargetIdsChange = 'scrollablemanager:statechange';
let observer = null;
let observerOptions = {
  root: null, // browser viewport
  rootMargin: '-20px 0px',
  threshold: 0,
};

export const useTargetsInViewport = () => {
  const [targetIds, setTargetIds] = useState(intersectingTargetIds);
  const handleChange = () => {
    setTargetIds(intersectingTargetIds);
  };

  useEffect(() => {
    window.addEventListener(intersectingTargetIdsChange, handleChange);
    return () => window.removeEventListener(intersectingTargetIdsChange, handleChange);
  }, []);

  return { targetIds: [...targetIds] };
};

export const ScrollableManager = (() => {
  let debouncedDispatchChange = debounce(() => {
    window.dispatchEvent(new Event(intersectingTargetIdsChange));
  });

  let observerSetup = () => {
    observer = new IntersectionObserver(observerCallback, observerOptions);
  };

  let observerDestroy = () => {
    observer.disconnect();
    observer = null;
  };

  let observerCallback = (entries) => {
    entries.forEach((entry) => {
      let id = entry.target.id;
      let state = targetStates[id];

      if (!state) {
        console.warn(`Unable to find intersection  target state for id '${id}'`);
        return;
      }

      // TODO: use window.requestIdleCallback()?
      if (state.isIntersecting || entry.isIntersecting) {
        state.time = entry.time;
        state.isIntersecting = entry.isIntersecting;

        if (!entry.isIntersecting) {
          state.boundingClientRect = null;
        }

        if (entry.isIntersecting && intersectingTargetIds.indexOf(id) === -1) {
          unsafeAddIntersectingTargetId(id, entry.time);
        } else if (!entry.isIntersecting && intersectingTargetIds.indexOf(id) !== -1) {
          unsafeRemoveIntersectingTargetId(id, entry.time);
        }
      }
    });

    intersectingTargetIds.forEach((id) => {
      let state = targetStates[id];
      if (!state) return;
      state.boundingClientRect = state.target.getBoundingClientRect();
    });

    unsafeSortIntersectingTargetIdsByTop();
    debouncedDispatchChange();
  };

  let unsafeAddIntersectingTargetId = (id) => {
    intersectingTargetIds = [...intersectingTargetIds, id];
  };

  let unsafeRemoveIntersectingTargetId = (id) => {
    intersectingTargetIds = intersectingTargetIds.filter((it) => it !== id);
  };

  let unsafeSortIntersectingTargetIdsByTop = () => {
    intersectingTargetIds.sort(
      (a, b) => targetStates[a].boundingClientRect.top - targetStates[b].boundingClientRect.top,
    );
  };

  let addSection = ({ target }) => {
    let id = target.id;
    let state = {
      id,
      target,
      isIntersecting: false,
      time: 0,
      boundingClientRect: null,
    };

    // verify id is unique
    if (targetStates[id]) {
      console.error(`Attempted to add a second target for id '${id}'`);
      return;
    }

    // set up observer if not exists
    if (!observer) {
      observerSetup();
    }

    targetStates[id] = state;
    observer.observe(target);
  };

  let removeSection = (id) => {
    let state = targetStates[id];

    if (!state) return;

    targetStates[id] = null;
    observer.unobserve(state.target);
    unsafeRemoveIntersectingTargetId(id);
    // FIXME
    // requestAnimationFrame(() => window.dispatchEvent(new Event(intersectingTargetIdsChange)));

    // destory observer if no targets
    if (!Object.keys(targetStates).length) {
      observerDestroy();
    }
  };

  return {
    observerOptions,
    addSection,
    removeSection,
  };
})();
