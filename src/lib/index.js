import React, { useContext, useEffect, useRef, useState, createContext } from 'react';
import * as Yall from './yall';

const yallCtx = createContext();

export class Provider extends React.Component {
  static contextType = yallCtx;
  constructor(props) {
    super(props);
    
    this.push = this.push.bind(this);
    this.remove = this.remove.bind(this);
    this.yallLoad = this.yallLoad.bind(this);
    this.state = {
      yallElements: []
    };
  }

  componentDidMount() {
    const { options } = this.props;
    if (Yall.getEnv().intersectionObserverSupport === true) {
      this.intersectionListener = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting === true && entry.intersectionRatio > 0) {
              const element = entry.target;
              if (options.idlyLoad === true) {
                requestIdleCallback(() => this.yallLoad(element), this.idleCallbackOptions);
              } else {
                this.yallLoad(element);
              }

              element.classList.remove(options.lazyClass);
              this.remove(element);
            }
          });
      }, {
        rootMargin: `${options.threshold}px 0%`,
      });
      this.state.yallElements.forEach(lE => this.intersectionListener.observe(lE));
    }
  }

  componentWillUnmount() {
    if (this.intersectionListener) {
      this.intersectionListener.disconnect();
    }
  }

  get idleCallbackOptions() {
    const { options } = this.props;
    return {
      timeout: options.idleLoadTimeout
    }
  }

  onAddElement(yallElement) {
    if (Yall.getEnv().intersectionObserverSupport === true) {
      this.intersectionListener.observe(yallElement);
    }
  }

  onRemoveElement(yallElement) {
    if (Yall.getEnv().intersectionObserverSupport === true) {
      this.intersectionListener.unobserve(yallElement);
    }
  }
  
  yallLoad(element) {
    const { options } = this.props;
    element.flipSrc();

    if (element.tagName === "VIDEO" && element.autoplay === true) {
      element.load();
    }

    // Lazy load CSS background images
    if (element.classList.contains(options.lazyBackgroundClass)) {
      element.classList.remove(options.lazyBackgroundClass);
      element.classList.add(options.lazyBackgroundLoaded);
    }
  }

  push(yallElement) {
    this.setState(prevState => ({
      yallElements: [...prevState.yallElements, yallElement]
    }), () => this.onAddElement(yallElement));
  }

  remove(yallElement) {
    this.setState(prevState => ({
      yallElements: prevState.yallElements.filter(e => e === yallElement)
    }), () => this.onRemoveElement(yallElement));
  }

  render() {
    return (
      <yallCtx.Provider value={this}>
        <div className="yall-provider-container" ref={ref => (this.yallProvider = ref)}>
          {this.props.children}
        </div>
      </yallCtx.Provider>
    );
  }
}

Provider.defaultProps = {
  options: Yall.defaultOptions
};

export function YallImg({ dataSrc, src, ...props }) {
  const [_src, setSrc] = useState(src);
  const ref = useRef(null);
  const { push, remove } = useContext(yallCtx);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.flipSrc = setSrc.bind(this, dataSrc);
    push(ref.current);
    return () => remove(ref.current);
  }, [ref.current !== null]);


  return (
    <img
      ref={ref}
      {...props}
      src={_src}
      data-src={dataSrc}
    />
  );
}

export function YallPicture({ sources, src, dataSrc, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [sourcesSrcs, setSourcesSrcs] = useState(sources.map(s => s.srcSet));
  const pctRef = useRef(null);
  const sourcesRefs = sources.map(i => useRef(null));

  const { push, remove } = useContext(yallCtx);
  useEffect(() => {
    if (!pctRef.current) {
      return;
    }
    
    pctRef.current.flipSrc = () => {
      setImgSrc(dataSrc);
      setSourcesSrcs(sources.map(s => s.dataSrcSet));
    };
    push(pctRef.current);
    return () => remove(pctRef.current);
  }, [pctRef.current !== null]);


  return (
    <picture ref={pctRef}>
      {sources.map((s, i) => (
        <source
          ref={sourcesRefs[i]}
          key={s.media}
          media={s.media}
          srcSet={sourcesSrcs[i]}
          data-srcset={s.dataSrcSet}
        />
      ))}
      <img src={imgSrc} data-src={dataSrc} {...props} />
    </picture>
  );
}


export function YallVideo({ sources, src, dataSrc, children, ...props }) {
  const [videoSrc, setVideoSrc] = useState(src);
  const [sourcesSrcs, setSourcesSrcs] = useState(sources && sources.map(s => s.srcSet));
  const pctRef = useRef(null);
  const sourcesRefs = sources && sources.map(i => useRef(null));

  const { push, remove } = useContext(yallCtx);
  useEffect(() => {
    if (!pctRef.current) {
      return;
    }
    
    pctRef.current.flipSrc = () => {
      setVideoSrc(dataSrc);
      if (sources) {
        setSourcesSrcs(sources.map(s => s.dataSrcSet));
      }
    };
    push(pctRef.current);
    return () => remove(pctRef.current);
  }, [pctRef.current !== null]);


  return (
    <video src={videoSrc} data-src={dataSrc} ref={pctRef} {...props}>
      {sources && sources.map((s, i) => (
        <source
          ref={sourcesRefs[i]}
          key={s.type}
          type={s.type}
          srcSet={sourcesSrcs[i]}
          data-srcset={s.dataSrcSet}
        />
      ))}
      {children}
    </video>
  );
}