/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import CrossPlatformSVG from '../../static/img/homepage/cross-platform.svg';
import {setupDissectionAnimation} from './animations/_dissectionAnimation';
import {setupHeaderAnimations} from './animations/_headerAnimation';

const textContent = {
  intro: `
In the dynamic realm of software development, where efficiency and innovation are paramount, Flower emerges as a transformative force—a powerful Application Engine designed to revolutionize every facet of the development lifecycle. 
  `,
  nativeCode: `
More than just a platform, Flower is a comprehensive toolkit that seamlessly integrates data modeling, database creation, application development, and quality engineering, positioning itself as the ultimate solution for developers seeking streamlined processes and groundbreaking outcomes.
  `,
  codeExample: `
import YourComponents from 'customer-ui';
import {ApplicationView} from 'flower-api';

const WelcomeToFlower = () => (
  <ApplicationView>
  </ApplicationView>
);
  `,
  forEveryone: `
React Native lets you create truly native apps and doesn't compromise your users' experiences.
It provides a core set of platform agnostic native components like <code>View</code>, <code>Text</code>, and <code>Image</code>
that map directly to the platform’s native UI building blocks.
  `,
  crossPlatform: `
React components wrap existing native code and interact with native APIs via
React’s declarative UI paradigm and JavaScript. This enables native app development
for whole new teams of developers, and can let existing native teams work much faster.
  `,
  fastRefresh: `
<strong>See your changes as soon as you save.</strong> With the power of JavaScript,
React Native lets you iterate at lightning speed. No more waiting for native builds to finish.
Save, see, repeat.
  `,
  talks: `
Members of the React Native team frequently speak at various conferences.
<br/><br/>
You can follow the latest news from the React Native team on Twitter
  `,
};

function Heading({text}) {
  return <h2 className="Heading">{text}</h2>;
}

function ActionButton({href, type = 'primary', target, children}) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function TextColumn({title, text, moreContent}) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton type="primary" href={useBaseUrl('products')} target="_self">
        View Products
      </ActionButton>
      <ActionButton
        type="secondary"
        href={useBaseUrl('products')}
        target="_self">
        Learn more
      </ActionButton>
    </>
  );
}

function TwitterButton({accountName}) {
  return (
    <a
      href={`https://twitter.com/intent/follow?screen_name=${accountName}&region=follow_link`}
      className="twitter-follow-button">
      <div className="icon" />
      Follow @{accountName}
    </a>
  );
}

function GitHubStarButton() {
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/facebook/react-native"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star facebook/react-native on GitHub">
        Star
      </GitHubButton>
    </div>
  );
}

export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function ScreenRect({className, fill, stroke}) {
  return (
    <rect
      className={`screen ${className || ''}`}
      rx="3%"
      width="180"
      height="300"
      x="-90"
      y="-150"
      fill={fill}
      stroke={stroke}
    />
  );
}

function LogoAnimation() {
  return (
    <svg
      className="LogoAnimation init"
      width={350}
      height={350}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-200 -200 400 400">
      <title>React Logo</title>
      <clipPath id="screen">
        <ScreenRect fill="none" stroke="gray" />
      </clipPath>
      <rect
        x="-25"
        y="120"
        width="50"
        height="25"
        rx="2"
        fill="white"
        stroke="none"
        className="stand"
      />
      <polygon
        points="-125,90 125,90 160,145 -160,145"
        fill="white"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        className="base"
      />
      <ScreenRect className="background" stroke="none" />
      <g clipPath="url(#screen)" className="logo">
        <g className="logoInner">
          <circle cx="0" cy="0" r="30" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="15" fill="none" id="logo">
            <ellipse rx="165" ry="64" />
            <ellipse rx="165" ry="64" transform="rotate(60)" />
            <ellipse rx="165" ry="64" transform="rotate(120)" />
          </g>
        </g>
        <line
          x1="-30"
          x2="30"
          y1="130"
          y2="130"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          className="speaker"
        />
      </g>
      <ScreenRect fill="none" stroke="white" />
    </svg>
  );
}

function HeaderHero() {
  return (
    <Section background="dark" className="HeaderHero">
      {/* <div className="socialLinks">
        <TwitterButton accountName="reactnative" />
        <GitHubStarButton />
      </div> */}
      <TwoColumns
        reverse
        columnTwo={
          <>
            <h1 className="title">
              <a href="flower">Flower</a>
            </h1>
            <p className="tagline">
              A <a href="flower">new product</a> from Bit redefining Software
              Development.
            </p>
            <div className="buttons">
              <HomeCallToAction />
            </div>
          </>
        }
      />
    </Section>
  );
}

function NativeApps() {
  return (
    <Section className="NativeApps" background="light">
      <TwoColumns
        reverse
        columnOne={<TextColumn title="Innovation" text={textContent.intro} />}
        columnTwo={<div>&nbsp;</div>}
      />
    </Section>
  );
}

function NativeCode() {
  return (
    <Section className="NativeCode" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="A new way to building great software"
            text={textContent.nativeCode}
          />
        }
        columnTwo={
          <CodeBlock language="jsx">{textContent.codeExample}</CodeBlock>
        }
      />
    </Section>
  );
}

function NativeDevelopment() {
  return (
    <Section className="NativeDevelopment" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Native Development For Everyone"
            text={textContent.forEveryone}
          />
        }
        columnTwo={
          <div className="dissection">
            {[0, 1, 2, 3].map(i => (
              <img
                alt=""
                key={i}
                src={useBaseUrl(`img/homepage/dissection/${i}.png`)}
              />
            ))}
          </div>
        }
      />
    </Section>
  );
}

function CrossPlatform() {
  return (
    <Section className="CrossPlatform" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Seamless Cross-Platform"
            text={textContent.crossPlatform}
          />
        }
        columnTwo={<CrossPlatformSVG />}
      />
    </Section>
  );
}

function FastRefresh() {
  return (
    <Section className="FastRefresh" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn title="Fast Refresh" text={textContent.fastRefresh} />
        }
        columnTwo={
          <video
            muted
            autoPlay
            loop
            playsInline
            src={useBaseUrl(`img/homepage/ReactRefresh.mp4`)}
          />
        }
      />
    </Section>
  );
}

function VideoContent() {
  return (
    <div>
      <Section className="VideoContent" background="tint">
        <br />
        <TwoColumns
          columnOne={
            <TextColumn
              title="Talks and Videos"
              text={textContent.talks}
              moreContent={<TwitterButton accountName="reactnative" />}
            />
          }
          columnTwo={
            <div className="vidWrapper">
              <iframe
                src="https://www.youtube.com/embed/NCAY0HIfrwc"
                title="Mobile Innovation with React Native, ComponentKit, and Litho"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />
        <br />
        <TwoColumns
          columnOne={
            <>
              <p>
                The{' '}
                <a href="https://opensource.facebook.com/">
                  Meta Open Source team
                </a>{' '}
                has put together a short overview of React Native, where they
                explained the project in beginner's terms.
              </p>
            </>
          }
          columnTwo={
            <div className="vidWrapper">
              <iframe
                src="https://www.youtube.com/embed/wUDeLT6WXnQ"
                title="Explain Like I'm 5: React Native"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />
      </Section>
    </div>
  );
}

/* Community */

function AppList() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields.users)
    .flat()
    .filter(app => app.pinned);

  return (
    <ul className="AppList">
      {apps.map((app, i) => {
        const imgSource = !app.icon.startsWith('http')
          ? useBaseUrl('img/showcase/' + app.icon)
          : app.icon;
        return (
          <li key={i} className="item">
            {app.infoLink ? (
              <a href={app.infoLink}>
                <img src={imgSource} alt={app.name} />
              </a>
            ) : (
              <img src={imgSource} alt={app.name} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Community() {
  return (
    <Section className="Community" background="light">
      <div className="content">
        <Heading text="Facebook Supported, Community Driven" />
        <TwoColumns
          columnOne={
            <>
              <p className="firstP">
                <img src={useBaseUrl(`img/homepage/fb-logo.svg`)} alt="" />
                <span>
                  Facebook released React Native in 2015 and has been
                  maintaining it ever since.
                </span>
              </p>
              <p>
                In 2018, React Native had the{' '}
                <a href="https://octoverse.github.com/2018/projects#repositories">
                  2nd highest
                </a>{' '}
                number of contributors for any repository in GitHub. Today,
                React Native is supported by contributions from individuals and
                companies around the world including{' '}
                <span>
                  <a href="https://callstack.com/">Callstack</a>
                </span>
                ,{' '}
                <span>
                  <a href="https://expo.io/">Expo</a>
                </span>
                , <a href="https://infinite.red/">Infinite Red</a>,{' '}
                <a href="https://www.microsoft.com/">Microsoft</a> and{' '}
                <a href="https://swmansion.com/">Software Mansion</a>.
              </p>
              <p>
                Our community is always shipping exciting new projects and
                exploring platforms beyond Android and iOS with repos like{' '}
                <span>
                  <a href="https://github.com/microsoft/react-native-windows#readme">
                    React Native Windows
                  </a>
                </span>
                ,{' '}
                <a href="https://github.com/microsoft/react-native-macos#readme">
                  React Native macOS
                </a>{' '}
                and{' '}
                <a href="https://github.com/necolas/react-native-web#readme">
                  React Native Web
                </a>
                .
              </p>
            </>
          }
          columnTwo={
            <>
              <p>
                React Native is being used in thousands of apps, but it's likely
                you've already used it in one of these apps:
              </p>
              <AppList />
              <p>
                and <a href={useBaseUrl(`showcase`)}>many more</a>.
              </p>
            </>
          }
        />
      </div>
    </Section>
  );
}

function GetStarted() {
  return (
    <Section className="GetStarted" background="dark">
      <div className="content">
        <Heading text="Give it a try" />
        <ol className="steps">
          <li>
            <p>Run this</p>
            <div className="terminal">
              <code>npx react-native init MyTestApp</code>
            </div>
          </li>
          <li>
            <p>Read these</p>
            <HomeCallToAction />
          </li>
        </ol>
      </div>
    </Section>
  );
}

const useHomePageAnimations = () => {
  //useEffect(() => setupHeaderAnimations(), []);
  // useEffect(() => setupDissectionAnimation(), []);
};

const Index = () => {
  useHomePageAnimations();
  return (
    <Layout
      description="Reshaping the standards of excellence in software development"
      wrapperClassName="homepage">
      <Head>
        <title>Bit</title>
        <meta
          property="og:title"
          content="Reshaping the standards of excellence in software development"
        />
      </Head>
      <HeaderHero />
      <NativeApps />
      <NativeCode />
      {/*
       */}
      {/* <NativeDevelopment /> */}
      {/* <CrossPlatform /> */}

      {/* 
       <FastRefresh />
      <VideoContent />
      <Community />
      <GetStarted />  */}
    </Layout>
  );
};

export default Index;
