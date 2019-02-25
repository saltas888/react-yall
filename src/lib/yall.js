const sliceCall = arr => [].slice.call(arr);
// Added because there was a number of patterns like this peppered throughout
// the code. This just flips necessary data- attrs on an element
const yallFlipDataAttrs = element => {
  // Do `srcset` first. Doing `src` first can cause loading of additional
  // assets on Safari (and possibly other webkit browsers).
  if (element.getAttribute("data-srcset") !== null) {
    element.setAttribute("srcset", element.getAttribute("data-srcset"));
  }

  if (element.getAttribute("data-src") !== null) {
    element.setAttribute("src", element.getAttribute("data-src"));
  }

  if (element.getAttribute("data-poster") !== null) {
    element.setAttribute("poster", element.getAttribute("data-poster"));
  }
};

export const getEnv = () => ({
  intersectionObserverSupport: "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
  idleCallbackSupport: "requestIdleCallback" in window
});

export const defaultOptions = {
  lazyClass: "lazy",
  lazyBackgroundClass: "lazy-bg",
  lazyBackgroundLoaded: "lazy-bg-loaded",
  idlyLoad: false,
  idleLoadTimeout: 100,
  threshold: 200,
};

export const createYallLoad = options => element => {
  // Lazy load <img> elements
  if (element.tagName === "IMG") {
    const parentElement = element.parentNode;

    // Is the parent element a <picture>?
    if (parentElement.tagName === "PICTURE") {
      sliceCall(parentElement.querySelectorAll("source")).forEach(source => yallFlipDataAttrs(source));
    }

    yallFlipDataAttrs(element);
  }

  // Lazy load <video> elements
  if (element.tagName === "VIDEO") {
    sliceCall(element.querySelectorAll("source")).forEach(source => yallFlipDataAttrs(source));

    // We didn't need this before, but with the addition of lazy loading
    // `poster` images, we need to run the flip attributes function on the
    // video element itself so we can trigger lazy loading behavior on those.
    yallFlipDataAttrs(element);

    if (element.autoplay === true) {
      element.load();
    }
  }

  // Lazy load <iframe> elements
  if (element.tagName === "IFRAME") {
    yallFlipDataAttrs(element);
  }

  // Lazy load CSS background images
  if (element.classList.contains(options.lazyBackgroundClass)) {
    element.classList.remove(options.lazyBackgroundClass);
    element.classList.add(options.lazyBackgroundLoaded);
  }
};