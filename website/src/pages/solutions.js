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
            Solutions - <span>Collaborating for Success!</span>
          </h1>
          <p>
            Welcome to Bit, your partner in overcoming digital challenges and
            unlocking new growth opportunities. Our solutions are crafted with
            precision and designed to address the complexities of the modern
            digital landscape. Explore how Bit can be the catalyst for your
            transformative journey.{' '}
          </p>
        </div>
      </Section>
      <Section>
        <div className="sectionContainer">
          <h2> Custom Software Development - Tailored to Your Vision</h2>
          <p>
            <strong>Overview</strong>
            <br />
            Embark on a tailored software development journey with Bit Our
            custom solutions are crafted to align seamlessly with your vision,
            addressing unique challenges and amplifying your digital
            capabilities.
          </p>
          <p>
            <strong>Key Features</strong>
            <br />
            <br />
            <strong>Strategic Planning: </strong>Collaborative planning to
            define project goals and milestones.
            <br />
            <strong>Agile Development:</strong> Flexible and iterative
            development cycles for adaptability.
            <br />
            <strong>User-Centric Design:</strong> Prioritizing user experience
            for enhanced accessibility.
            <br />
            <strong>Scalability:</strong> Solutions designed to grow with your
            evolving business needs.
            <br />
            <strong>Post-Launch Support:</strong> Ongoing support and
            maintenance for sustained success.
          </p>
          <h2> Digital Transformation Services- Elevate Your Business</h2>
          <p>
            <strong>Overview</strong>
            <br />
            Navigate the digital landscape confidently through our Digital
            Transformation Services. Bit empowers businesses to embrace change,
            optimize processes, and stay ahead in a rapidly evolving digital
            world.
          </p>
          <p>
            <strong>Key Features:</strong>
            <br />
            <br />
            <strong>Process Optimization:</strong> Streamlining workflows for
            efficiency and productivity.
            <br />
            <strong>Technology Integration:</strong> Seamlessly integrating
            cutting-edge technologies.
            <br />
            <strong>Data Analytics:</strong>Harnessing the power of data for
            informed decision-making.
            <br />
            <strong>Cloud Solutions:</strong>Leveraging cloud infrastructure for
            scalability and accessibility.
            <br />
            <strong>Cybersecurity:</strong>Ensuring robust security measures to
            protect your digital assets.
          </p>
          <h2> Consultancy and Advisory- Guiding Your Software Strategy</h2>
          <p>
            <strong>Overview</strong>
            <br />
            Unlock the full potential of your software development strategy with
            Bit's consultancy and advisory services. Our experts provide
            insights, guidance, and strategic direction to align your digital
            initiatives with overarching business goals.
            <br />
            <br />
            <strong>Key Features</strong>
            <br />
            <br />
            <strong>Needs Assessment:</strong>Understanding your unique
            challenges and goals.
            <br />
            <strong>Strategic Planning:</strong> Crafting a roadmap for
            effective digital transformation.
            <br />
            <strong>Technology Adoption:</strong> Recommending and implementing
            cutting-edge solutions.
            <br />
            <strong>Risk Management:</strong> Identifying and mitigating
            potential risks in your digital journey.
          </p>
          <h2> Why Choose Bit Solutions?</h2>
          <p>
            <strong>Tailored Approach:</strong> Our solutions are not
            one-size-fits-all but customized to meet your unique needs and
            challenges.
            <br />
            <strong>Expert Guidance:</strong> Benefit from the expertise of our
            seasoned professionals, who bring a wealth of knowledge to every
            project.
            <br />
            <strong>Innovation:</strong> Bit is synonymous with innovation,
            constantly pushing what's possible in the digital realm.
            <br />
            <strong>End-to-End Support:</strong> From planning to execution and
            beyond, our solutions come with comprehensive support for long-term
            success.
            <br />
            <strong>Global Vision:</strong> While rooted in Toronto, our
            solutions are designed with a worldwide perspective, catering to
            diverse markets and industries.
          </p>
          <h2> Empower Your Digital Journey with Bit</h2>
          <p>
            Bit is more than a solution provider; we are transformation
            architects. Explore our solutions, embrace the future, and elevate
            your digital presence with Bit. Welcome to a world where challenges
            become opportunities and solutions are crafted for success.
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
