import * as classNames from 'classnames';
import * as React from 'react';

const ENOUGH_TIME_FOR_RERENDER = 50;
const DEFAULT_HEIGHT = 0;
const DEFAULT_DURATION = 200;
const DEFAULT_FADE_HEIGHT = 50;
const DEFAULT_FADE_COLOR = '#FFF';

interface FadePropsActive {
  fadeOut: true;
  fadeColor?: string;
  fadeHeight?: number;
}

interface FadePropsDisabled {
  fadeOut?: false;
  fadeColor?: undefined;
  fadeHeight?: undefined;
}

interface ExternalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  animationDuration?: number;
  maxCollapsedHeight?: number;
}

interface CollapseState { // tslint:disable-line:no-unused-variable
  height: number;
  opened: boolean;
  opening: boolean;
}

export type CollapseProps = ExternalProps & (FadePropsActive | FadePropsDisabled);

export class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  private element: Element;
  private timeout: number;

  public constructor (props: CollapseProps) {
    super(props);

    const { maxCollapsedHeight = DEFAULT_HEIGHT } = props;

    this.state = {
      height: maxCollapsedHeight,
      opening: false,
      opened: false
    };
  }

  public componentDidUpdate (previousProps: CollapseProps) {
    if (this.props.open !== previousProps.open) {
      window.clearTimeout(this.timeout);

      const { maxCollapsedHeight = DEFAULT_HEIGHT, animationDuration = DEFAULT_DURATION } = this.props;

      this.setState({
        opened: false,
        opening: previousProps.open,
        height: this.props.open ? maxCollapsedHeight : this.element.scrollHeight
      });

      this.timeout = window.setTimeout(() => {
        this.setState({
          opened: false,
          opening: this.props.open,
          height: this.props.open ? this.element.scrollHeight : maxCollapsedHeight
        });

        this.timeout = window.setTimeout(() => {
          this.setState({
            opened: this.props.open,
            opening: this.props.open
          });
        }, animationDuration);
      }, ENOUGH_TIME_FOR_RERENDER);
    }
  }

  public componentDidMount () {
    const { maxCollapsedHeight = DEFAULT_HEIGHT } = this.props;

    this.setState({
      height: this.props.open ? this.element.scrollHeight : maxCollapsedHeight
    });
  }

  public componentWillMount () {
    window.clearTimeout(this.timeout);
  }

  public render () {
    const { opening, opened, height } = this.state;

    const {
      children,
      className,
      fadeOut,
      fadeColor = DEFAULT_FADE_COLOR,
      fadeHeight = DEFAULT_FADE_HEIGHT,
      open,
      maxCollapsedHeight,
      animationDuration = DEFAULT_DURATION,
      ...remainingProps
    } = this.props;

    const collapseStyle = {
      height: opened ? 'auto' : height,
      position: 'relative' as 'relative',
      overflow: 'hidden' as 'hidden',
      transition: `ease-in-out ${animationDuration}ms height`
    };

    const fadeStyle = {
      height: fadeHeight,
      width: '100%',
      position: 'absolute' as 'absolute',
      bottom: 0,
      opacity: opening ? 0 : 1,
      background: `linear-gradient(transparent, ${fadeColor} 80%)`,
      transition: `ease-in-out ${animationDuration}ms opacity`
    };

    return (
      <div
        ref={(element: HTMLDivElement) => this.element = element}
        {...remainingProps}
        className={classNames('clearfix collapse', height ? 'collapse-open' : null, className)}
        style={collapseStyle}
      >
        {children}
        {
          fadeOut && !opened && (
            <div
              className="collapse-fade"
              style={fadeStyle}
            />
          )
        }
      </div>
    );
  }
}

export default Collapse;
