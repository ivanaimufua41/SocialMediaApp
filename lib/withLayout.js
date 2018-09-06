import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import getContext from './context';
import Header from '../components/Header';

function withLayout(BaseComponent) {
  class App extends Component {
    constructor(props, context) {
      super(props, context);
      this.pageContext = this.props.pageContext || getContext(); // eslint-disable-line
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <div>
            <Header {...this.props} />
            <BaseComponent {...this.props} />
          </div>
        </MuiThemeProvider>
      );
    }
  }

  App.propTypes = {
    pageContext: PropTypes.object // eslint-disable-line
  };

  App.defaultProps = {
    pageContext: null,
  };

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };
  return App;
}

export default withLayout;
