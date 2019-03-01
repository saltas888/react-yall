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