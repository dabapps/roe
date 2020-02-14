import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
// import * as CSSTransitionGroup from 'react-transition-group';

export interface ModalRendererProps extends HTMLProps<HTMLElement> {
  /**
   * Array of modals to be rendered.
   */
  modals: ReadonlyArray<React.ReactNode>;
}

/**
 * Required to render modals.
 * Should be rendered in the root of your app.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalRenderer extends PureComponent<ModalRendererProps, {}> {
  public render() {
    const { modals } = this.props;

    return (
      // <CSSTransitionGroup
      //   transitionName="modal-transition"
      //   transitionEnterTimeout={300}
      //   transitionLeaveTimeout={200}
      // >
      //   {modals &&
      //     modals.map((modal, index) => (
      //       <div key={index} className="modal-container">
      //         {modal}
      //       </div>
      //     ))}
      // </CSSTransitionGroup>
      <span />
    );
  }
}

export default ModalRenderer;
