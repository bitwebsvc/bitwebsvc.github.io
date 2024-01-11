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
            Partners - <span>Collaborating for Success!</span>
          </h1>
          <p>
            Welcome to the Bit Partners Page, where collaboration is the
            cornerstone of our success. Our partners play a crucial role in
            shaping the future of technology, and together, we forge meaningful
            connections, drive innovation, and create lasting impact. Join us in
            celebrating the strength of our partnerships.
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <h2> Our Partnerships - A Shared Vision</h2>
          <p className="showcaseSectionDescription">
            Bit emerged from the collective passion of a dynamic team determined
            to break barriers in the tech landscape. Our story is of resilience,
            creativity, and a relentless pursuit of excellence. We started with
            a dream to make software development an experience that transcends
            the ordinary.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Technology Partnerships - Powering Innovation</h2>
          <p className="showcaseSectionDescription">
            <strong>Overview</strong>
            <br />
            Our technology partners are at the forefront of innovation,
            providing cutting-edge solutions that complement and enhance the
            capabilities of Bit Together. We leverage the latest advancements to
            drive transformative change in the digital landscape.
            <br />
            <br />
            <strong>Key Benefits</strong>
            <br />
            <strong>Access to Cutting-Edge Technology</strong> - Stay ahead with
            the latest tools and technologies.
            <br />
            <strong>Collaborative Development</strong> - Co-create solutions
            that redefine industry standards.
            <br />
            <strong>Shared Resources</strong> - Pool resources for enhanced
            research and development.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Industry Alliances - Strengthening Market Presence</h2>
          <p className="showcaseSectionDescription">
            <strong>Overview</strong>
            <br />
            Industry alliances testify to our commitment to excellence within
            specific sectors. Bit collaborates with industry leaders to bring
            our clients specialized solutions and domain expertise, ensuring
            tailored success.
            <br />
            <strong>Key Benefits</strong>
            <br />
            <strong>Vertical-Specific Solutions</strong> - Address
            industry-specific challenges with precision.
            <br />
            <strong>Market Insights </strong> - Gain valuable insights into
            sector trends and emerging technologies.
            <br />
            <strong>Enhanced Networking</strong> - Build connections within
            specific industries for mutual growth.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Strategic Alliances - Amplifying Impact</h2>
          <p className="showcaseSectionDescription">
            <strong>Overview</strong>
            <br />
            Our strategic alliances go beyond technology to encompass a holistic
            approach to business growth. Bit collaborates with organizations
            that share our values, driving collective impact and contributing to
            a thriving digital ecosystem.
            <br />
            <strong>Key Benefits</strong>
            <br />
            <strong>Business Development </strong> - Explore new growth and
            market expansion avenues.
            <br />
            <strong>Mutual Support </strong> - Foster a culture of support and
            shared resources.
            <br />
            <strong>Joint Ventures </strong> - Collaborate on projects that
            redefine industry benchmarks.
          </p>
        </div>
        <div className="showcaseSection">
          <h2> Join Us on the Journey</h2>
          <p className="showcaseSectionDescription">
            Bit welcomes new partnerships and collaborations that align with our
            values and vision. Whether you are a technology provider, industry
            leader, or a strategic ally, we invite you to explore the
            opportunities that arise when visionary minds come together. To
            express interest in partnering with Bit, please get in touch with
            our Partnership Team at{' '}
            <a href="mailto:sales@bitwebsvc.net">sales@bitwebsvc.net</a>.
            Together, let's shape the future of technology and create a legacy
            of innovation. Welcome to the Bit Partners Community.
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
