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
    <Layout title="Company" description="ThousanEmpowering Tomorrow, Today!">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            Our Company - <span>About Us</span>
          </h1>
          <p>
            Welcome to Bit. At Bit, we are architects of innovation, pioneers of
            progress, and enthusiasts of endless possibilities. Rooted in the
            vibrant tech hub of Ottawa, Ontario, Canada, our journey began with
            a simple yet powerful vision: redefining the essence of software
            development. Welcome to a realm where the future is not just
            anticipated but crafted.
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <h2> Our Story</h2>
          <p className="showcaseSectionDescription">
            Bit emerged from the collective passion of a dynamic team determined
            to break barriers in the tech landscape. Our story is of resilience,
            creativity, and a relentless pursuit of excellence. We started with
            a dream to make software product development an experience that
            transcends the ordinary.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Mission & Vision</h2>
          <p className="showcaseSectionDescription">
            <strong>Vision </strong> - Empowering businesses and individuals
            through groundbreaking technology.
            <br />
            <strong>Mission</strong> - Reshaping the standards of excellence in
            software product development, providing innovative tools that
            inspire creativity, enhance efficiency, and drive operational
            excellence.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> What Sets Us Apart</h2>
          <p className="showcaseSectionDescription">
            <strong>Innovation</strong> - Bit is an innovative company that
            doesn't just adapt to changes in the Internet; we strive to push the
            boundaries of what's possible. Our solutions are designed to be more
            than just tools - they are powerful catalysts for change. We are
            dedicated to driving progress and delivering cutting-edge solutions
            to our clients.
            <br />
            <strong>User-Centricity</strong> - We write Every line of code and
            design features with the end user in mind. Accessibility and
            seamless experiences are not just goals but our commitment.
            <br />
            <strong>Adaptability</strong> - Adaptability is our forte in a world
            that evolves by the second. We stay agile to meet the ever-evolving
            demands of our clients and the tech industry.
            <br />
            <strong>Excellence</strong> - Excellence is not just a goal; it's
            our standard. From product development to customer service, we
            deliver nothing short of the best.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Our Flagship Product - Flower</h2>
          <p className="showcaseSectionDescription">
            At the heart of our offerings lies the Application Engine — more
            than a platform; it's a revolution. From simplifying database
            building to empowering effortless application development,
            automating workflows, and integrating generative AI, the Application
            Engine is the cornerstone of a new era in digital innovation.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Global Aspirations</h2>
          <p className="showcaseSectionDescription">
            While rooted in Canada, our ambitions know no borders. Bit is on a
            quest to explore and revolutionize the software product development
            landscapes of the USA and Latin America. Geographical boundaries do
            not confine our journey; it's a global exploration of possibilities.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Join Us on the Journey</h2>
          <p className="showcaseSectionDescription">
            Bit is not just a company; it's a community of innovators, creators,
            and forward-thinkers. Whether you're a developer seeking
            groundbreaking tools or a business looking to redefine its business
            system software, welcome to a space where the future is crafted
            today; join us on the transformative journey — welcome to Bit.
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
