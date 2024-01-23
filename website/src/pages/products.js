/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import {Section} from './index';
import IconExternalLink from '../theme/Icon/ExternalLink';

const renderApp = (app, i) => <AppBox app={app} key={`app-${app.name}-${i}`} />;

const AppBox = ({app}) => {
  const imgSource = useBaseUrl(
    app.icon.startsWith('http') ? app.icon : 'img/showcase/' + app.icon
  );

  return (
    <div className="showcase">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="showcaseContent">
        <div>
          <h3>{app.name}</h3>
          {renderLinks(app)}
        </div>
        {app.infoLink && (
          <a
            className="articleButton"
            href={app.infoLink}
            target="_blank"
            title={app.infoTitle}>
            Learn more{' '}
            <IconExternalLink width={12} height={12} style={{opacity: 0.5}} />
          </a>
        )}
      </div>
    </div>
  );
};

const renderLinks = app => {
  if (!app.linkAppStore && !app.linkPlayStore && !app.linkDesktop) {
    return <p />;
  }

  const links = [
    app.linkAppStore ? (
      <a key="ios" href={app.linkAppStore} target="_blank">
        iOS
      </a>
    ) : null,
    app.linkPlayStore ? (
      <a key="android" href={app.linkPlayStore} target="_blank">
        Android
      </a>
    ) : null,
    app.linkDesktop ? (
      <a key="desktop" href={app.linkDesktop} target="_blank">
        Desktop
      </a>
    ) : null,
  ]
    .filter(Boolean)
    .flatMap((link, i) =>
      i === 0 ? [link] : [<span key={i}> • </span>, link]
    );

  return <p className="showcaseLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const Showcase = () => {
  const {siteConfig} = useDocusaurusContext();

  const {meta, microsoft, shopify, wix, amazon, others} =
    siteConfig.customFields.users;
  const [pinnedRandomizedApps, setPinnedRandomizedApps] = useState([]);
  const [randomizedApps, setRandomizedApps] = useState([]);

  useEffect(() => {
    setRandomizedApps(randomizeApps(others.filter(app => !app.pinned)));
    setPinnedRandomizedApps(randomizeApps(others.filter(app => app.pinned)));
  }, []);

  return (
    <Layout title="Products" description="Empowering Business Systems">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            Products - <span>Empowering Business Systems</span>
          </h1>
          <p>
            Welcome to Bit, where innovation meets practicality and software
            development becomes a seamless experience. Our suite of products is
            designed to transform ideas into reality, empower developers, and
            elevate businesses to new heights. Explore the possibilities with
            Bit!
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <h2>Explore</h2>
          <p className="showcaseSectionDescription">
            Bit products are tools and enablers of innovation and progress. Join
            us on a journey where the power of technology shapes your digital
            future. Explore our products, experience the difference, and embrace
            a future where possibilities are limitless. Welcome to Bit — where
            innovation knows no bounds.
          </p>
        </div>
        <div className="showcaseSection">
          <h2>Flower</h2>
          <p className="showcaseSectionDescription">
            <a className="formButton" href="flower">
              Flower
            </a>{' '}
            is an all-encompassing solution designed to streamline and help
            expedite many aspects of software product development. Whether it's
            data modeling, database construction, or application development,
            the Application Engine transcends being just a platform; it stands
            as a transformative force in the field.
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <h2>Why Choose Bit Products?</h2>
          <p className="showcaseSectionDescription">
            <strong>Innovation</strong> Our products are at the forefront of
            technological evolution, integrating cutting-edge features and
            technologies.
            <br />
            <strong>User-Centric Design</strong> We prioritize user-friendly
            experiences, making our products accessible to developers and
            non-technical users.
            <br />
            <strong>Adaptability</strong> Bit products are designed to adapt to
            the evolving needs of the tech industry, ensuring relevance and
            effectiveness.
            <br />
            <strong>Comprehensive Solutions</strong> From data modeling, data
            store building to Artificial Intelligence integration, our products
            offer a holistic approach to software product development, covering
            all bases.
            <br />
            <strong>Global Ambitions</strong> While rooted in Canada, our
            products have global aspirations and designed to cater to diverse
            tech ecosystems.
            <br />
          </p>
        </div>
      </Section>
      <Section background="dark">
        <div className="sectionContainer footerContainer">
          {/* <a
            className="formButton"
            href="https://forms.gle/BdNf3v5hemV9D5c86"
            target="_blank">
            Apply to the Showcase by filling out this form
          </a> */}
          {/* <p>
            A curated list of{' '}
            <a
              key="demo-apps"
              href="https://github.com/ReactNativeNews/React-Native-Apps">
              open source React Native apps
            </a>{' '}
            is maintained by <a href="https://infinite.red">Infinite Red</a>.
          </p> */}
        </div>
      </Section>
    </Layout>
  );
};

export default Showcase;
