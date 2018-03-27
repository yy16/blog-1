import * as React from "react";
import { Container, Grid } from "semantic-ui-react";

import Header from '../components/header';
import Head from '../components/head';
import AboutMe from '../components/about/aboutme';

import 'semantic-ui-css/semantic.min.css';
import '../style/responsive.css';

require('../style/highlight.css');

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}


interface DefaultLayoutStates {
  //sidebarVisible: boolean;
}

// Use `module.exports` to be compliante with `webpack-require` import method
export default class DefaultLayout
  extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
  render() {
    const children = this.props.children();
    const layout = require("./layout.module.css");

    return (
      <div>
        <Head />
        <Header pathname={this.props.location.pathname} />
        <Grid container className={layout.grid}>
          <Grid.Column as="main" mobile={16} tablet={10} computer={12} largeScreen={13} className={layout.main}>
            {children}
          </Grid.Column>

          <Grid.Column mobile={16} tablet={6} computer={4} largeScreen={3}>
            <AboutMe />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};
