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
    <Layout
      title="Flower"
      description="Redefining Software Product Development">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            Flower - <span>Redefining Software Product Development</span>
          </h1>
          <p>
            Flower, is a comprehensive solution that simplifies and accelerates
            every facet of software product development. From data modeling,
            database building to application development, the Application Engine
            is not just a platform; it's a game-changer.
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <h2>
            Flower Application Engine - Redefining Software Product Development
          </h2>
          <p className="showcaseSectionDescription">
            <strong>Overview</strong>
            <br />
            <br />
            Flower is a powerful Application Engine designed to streamline and
            expedite various aspects of software product development. Covering
            everything from product management, data modeling, data store or
            database creation to application development and quality
            engineering, Flower is more than just a platform—it represents a
            transformative force in the field. By providing comprehensive tools
            and features, Flower aims to simplify the entire software product
            development process, making it a game-changer for users seeking
            efficiency and innovation.
            <br />
            <br />
            <strong>Key Features</strong>
            <br />
            <br />
            <strong>
              <a href="#marketplace">Marketplace</a>
            </strong>{' '}
            - A community for application distribution
            <br />
            <strong>
              <a href="#pm">Product Management</a>
            </strong>{' '}
            - End to end product management with strategic, collaboration,
            roadmapping, idea management, requirements management and release
            planning,
            <br />
            <strong>
              <a href="#datamodeler">Data Modeling</a>
            </strong>{' '}
            - Transform business reality through structure, relationships, and
            constraints of data in a system for effective model creation.
            <br />
            <strong>
              <a href="#datastore">Data Management</a>
            </strong>{' '}
            - Simplify and accelerate data store (database, NoSQL) creation for
            a solid foundation.
            <br />
            <strong>
              <a href="#interface">Interface Design</a>
            </strong>{' '}
            - Develop application interfaces effortlessly with drag and drop
            functionality, pre-built components and with integration of bring
            your own code/3rd party marketplace controls.
            <br />
            {/* <strong><a href="#automation">Automation</strong> - Streamline repetitive tasks, freeing up
            time for strategic endeavors.
            <br /> */}
            <strong>
              <a href="#qe">Quality Engineering</a>
            </strong>{' '}
            - End to end quality engineering test plans, test cases with
            automated testing over application features.
            <br />
            <strong>
              <a href="#admin">Administration and Controls</a>
            </strong>{' '}
            - Maintain control over applications with robust administrative
            features.
            <br />
            <strong>
              <a href="#atlas">Bit Atlas Assistant</a>
            </strong>{' '}
            - Bit Atlas assistant is a companion tool designed to provide Flower
            users with a quick and easy method to create and manage
            applications.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="marketplace"></a>
          <h2>Marketplace</h2>
          <p className="showcaseSectionDescription">
            <br />
            Marketplace is a dynamic and inclusive community designed to
            facilitate the distribution of applications across web based
            platforms. As a centralized hub, Marketplace serves as a meeting
            ground for developers, users, and businesses, fostering an
            environment that encourages innovation, collaboration, and seamless
            app discovery.
            <br />
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <a id="pm"></a>
          <h2>Product Management</h2>
          <p className="showcaseSectionDescription">
            <br />
            Product Management helps teams align product development with
            overall business goals and strategies. Facilitates collaboration
            among cross-functional teams, allowing product managers, developers,
            marketers, and other stakeholders to work together seamlessly. This
            helps in breaking down silos and ensuring everyone is on the same
            page. The software assists in creating visual roadmaps that outline
            the timeline and key milestones for product development. Provides a
            centralized system for collecting and evaluating product ideas. It
            helps in defining and managing product requirements. Assists in
            planning and managing product releases. Teams can use the platform
            to coordinate the timing and content of releases, ensuring that new
            features and improvements are delivered in a coherent and efficient
            manner.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="datamodeler"></a>
          <h2>Data Modeling</h2>
          <p className="showcaseSectionDescription">
            <br />
            In the contemporary landscape of information management, the role of
            a Data Modeler is pivotal in shaping the way businesses understand,
            organize, and utilize their data. The essence of a Data Modeler's
            work lies in transforming the intricate web of business reality into
            a structured, comprehensible format through the representation of
            data, relationships, and constraints within a system. This process
            is essential for the creation of effective data models that serve as
            the backbone for informed decision-making and streamlined
            operations.
            <br />
            <br />
            At its core, the Data Modeler's task is to conceptualize and design
            data models that accurately mirror the underlying business
            processes, entities, and their interconnections. This involves
            deciphering the complexities of an organization's operations and
            translating them into a visual framework that encapsulates the
            structural elements, relationships, and constraints governing the
            flow and organization of data.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="datastore"></a>
          <h2>Data Management</h2>
          <p className="showcaseSectionDescription">
            <br />
            In today's rapidly evolving technological landscape, the efficient
            management and storage of data are critical components for the
            success of any application or system. The Data Store platform aims
            to address this challenge by providing a comprehensive solution that
            simplifies and accelerates the creation of data stores, including
            databases and NoSQL solutions, to establish a robust foundation for
            data management.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="interface"></a>
          <h2>Interface Design</h2>
          <p className="showcaseSectionDescription">
            <br />
            Interface Designer is a powerful tool designed to streamline the
            process of application development by providing users with pre-built
            components. With this innovative platform, developers can create
            visually appealing and user-friendly interfaces effortlessly,
            reducing the complexity and time traditionally associated with
            application design.
            <br />
          </p>
        </div>
      </Section>
      <Section>
        <div className="showcaseSection">
          <a id="qe"></a>
          <h2>Quality Engineering</h2>
          <p className="showcaseSectionDescription">
            <br />
            Quality Engineering is a comprehensive approach to ensuring the
            delivery of high-quality software products throughout the entire
            development lifecycle. The focus is on detecting and preventing
            defects at every stage, from design to deployment. End-to-end
            Quality Engineering specifically emphasizes the creation and
            execution of robust test plans and test cases, complemented by
            automated testing, to thoroughly validate application features.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="admin"></a>
          <h2>Administration and Controls</h2>
          <p className="showcaseSectionDescription">
            <br />
            In the dynamic landscape of today's digital environment, maintaining
            control over applications is a critical aspect of ensuring
            efficiency, security, and compliance within an organization. Robust
            administrative features play a pivotal role in achieving this
            control, providing administrators with the tools and capabilities
            needed to manage, monitor, and optimize application performance.
            This overview delves into the key elements of administration and
            controls, highlighting the significance of a comprehensive approach
            to application management.
            <br />
          </p>
        </div>
      </Section>

      <Section>
        <div className="showcaseSection">
          <a id="atlas"></a>
          <h2>Bit Atlas Assistant</h2>
          <p className="showcaseSectionDescription">
            <br />
            Bit Atlas Assistant is a sophisticated companion tool meticulously
            crafted to enhance the user experience for all products within the
            Bit ecosystem. Tailored for all Bit product users, this assistant
            serves as a comprehensive solution for Flower, that is akin to what
            can be found in a command line utility but with a more user friendly
            web user interface. Bit Atlas Assistant provides a seamless and
            efficient method for creating and managing applications.
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
