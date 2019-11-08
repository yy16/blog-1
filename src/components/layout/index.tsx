import * as React from "react";
import Helmet from "react-helmet";

import AboutMe from "../about/aboutme";
import Header from "../header";

import "../../style/global.css";
import "../../style/highlight.css";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  lang: string;
  children: React.ReactNode;
}

// Use `module.exports` to be compliante with `webpack-require` import method
export default class Layout extends React.PureComponent<DefaultLayoutProps> {
  public render() {
    const children = this.props.children;
    const style = require("./layout.module.css");

    const pathname = this.props.location.pathname;
    const lang = this.props.lang;

    return (
      <div>
        <Helmet>
          <title>Lesley Lai</title>
          <html lang={lang} />
        </Helmet>
        <Header pathname={pathname} lang={lang} />
        <div className={style.layout}>
          <div className={style.grid}>
            <main className={style.main}>{children}</main>
            <nav className={style.about}>
              <AboutMe />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
