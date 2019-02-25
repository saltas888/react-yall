import React, { useContext, useEffect, useRef, createContext } from 'react';
import * as Yall from './yall';

const yallCtx = createContext();


export class Provider extends React.Component {
  static contextType = yallCtx;
  constructor(props) {
    super(props);
    
    this.push = this.push.bind(this);
    this.remove = this.remove.bind(this);
    this.yallLoad = Yall.createYallLoad(this.props.options)
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

export default function YallImg({ dataSrc, ...props }) {
  const ref = useRef(null);
  const { push, remove } = useContext(yallCtx);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    push(ref.current);
    return () => remove(ref.current);
  }, [ref.current !== null]);

  return (
    <img
      ref={ref}
      {...props}
      data-src={dataSrc}
    />
  );
}