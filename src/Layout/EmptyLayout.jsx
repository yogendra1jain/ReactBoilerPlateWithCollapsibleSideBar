import React from 'react';
import _get from 'lodash/get';


class EmptyLayout extends React.Component {

  render() {
    let { classes } = this.props;
    return (
      <div className="login-container">
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      </div>
    );
  }


}
export default EmptyLayout;