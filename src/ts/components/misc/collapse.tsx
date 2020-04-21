import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

const ENOUGH_TIME_FOR_RERENDER = 50;
const DEFAULT_HEIGHT = 0;
const DEFAULT_DURATION = 200;
const DEFAULT_FADE_HEIGHT = 50;
const DEFAULT_TRANSPARENT_COLOR = 'rgba(255, 255, 255, 0)';
const DEFAULT_FADE_COLOR = 'rgba(255, 255, 255, 1)';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the component to render a different element type.
   * @default 'div'
   */
  component?:
    | 'div'
    | 'span'
    | 'p'
    | 'ul'
    | 'main'
    | 'section'
    | 'aside'
    | 'strong';
  /**
   * Whether the collapse is open or not
   * @default false
   */
  open: boolean;
  /**
   * Duration of the animation (milliseconds)
   * @default 200
   */
  animationDuration?: number;
  /**
   * Maximum height when collapsed
   * @default 0
   */
  maxCollapsedHeight?: number | string;
  /**
   * Minimum height
   * @default auto
   */
  minHeight?: number | string;
  /**
   * Whether to fade out the content
   * @default false
   */
  fadeOut?: boolean;
  /**
   * Color to fade to
   * @default rgba(255, 255, 255, 1)
   */
  fadeColor?: string;
  /**
   * Transparent color to fade from (this should be a transparent version of the fadeColor)
   * @default rgba(255, 255, 255, 0)
   */
  transparentColor?: string;
  /**
   * Height of the faded area
   * @default 50
   */
  fadeHeight?: number;
}

export interface CollapseState {
  // tslint:disable-line:no-unused-variable
  height: number | string;
  opened: boolean;
  opening: boolean;
}

/**
 * Component to expand and collapse content, optionally displaying a small preview.
 */
export class Collapse extends PureComponent<CollapseProps, CollapseState> {
  private element: HTMLElement;
  private timeout: number;

  public constructor(props: CollapseProps) {
    super(props);

    const { maxCollapsedHeight = DEFAULT_HEIGHT, open } = props;

    this.state = {
      height: maxCollapsedHeight,
      opening: false,
      opened: open,
    };
  }

  public componentDidUpdate(previousProps: CollapseProps) {
    if (this.props.open !== previousProps.open) {
      window.clearTimeout(this.timeout);

      const {
        maxCollapsedHeight = DEFAULT_HEIGHT,
        animationDuration = DEFAULT_DURATION,
      } = this.props;

      this.setState({
        opened: false,
        opening: previousProps.open,
        height: this.props.open
          ? maxCollapsedHeight
          : this.element.scrollHeight,
      });

      this.timeout = window.setTimeout(() => {
        this.setState({
          opened: false,
          opening: this.props.open,
          height: this.props.open
            ? this.element.scrollHeight
            : maxCollapsedHeight,
        });

        this.timeout = window.setTimeout(() => {
          this.setState({
            opened: this.props.open,
            opening: this.props.open,
          });
        }, animationDuration);
      }, ENOUGH_TIME_FOR_RERENDER);
    }
  }

  public componentDidMount() {
    const { maxCollapsedHeight = DEFAULT_HEIGHT } = this.props;

    this.setState({
      height: this.props.open ? this.element.scrollHeight : maxCollapsedHeight,
    });
  }

  public componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  public render() {
    const {
      children,
      className,
      fadeOut,
      fadeColor = DEFAULT_FADE_COLOR,
      fadeHeight = DEFAULT_FADE_HEIGHT,
      transparentColor = DEFAULT_TRANSPARENT_COLOR,
      open,
      maxCollapsedHeight,
      minHeight = null,
      animationDuration = DEFAULT_DURATION,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const { opening, opened, height } = this.state;

    const collapseStyle: React.CSSProperties = {
      minHeight,
      maxHeight: opened ? null : height,
      position: 'relative' as 'relative',
      transition: `ease-in-out ${animationDuration}ms max-height`,
      ...(opened ? { overflow: 'hidden' } : undefined),
    };

    const fadeStyle: React.CSSProperties = {
      height: fadeHeight,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      opacity: opening ? 0 : 1,
      background: `linear-gradient(${transparentColor}, ${fadeColor} 80%)`,
      transition: `ease-in-out ${animationDuration}ms opacity`,
    };

    return (
      <Component
        ref={this.storeRef}
        {...remainingProps}
        className={classNames(
          'clearfix collapse',
          open ? 'collapse-open' : null,
          className
        )}
        style={collapseStyle}
      >
        {children}
        {fadeOut && !opened && (
          <div className="collapse-fade" style={fadeStyle} />
        )}
      </Component>
    );
  }

  private storeRef = (element: HTMLElement) => {
    this.element = element;
  };
}

export default Collapse;
