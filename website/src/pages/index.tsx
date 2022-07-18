import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" >{siteConfig.tagline}</h1>
        <p className="hero__subtitle">You are super duper secure in the multi cloud on our serverless Rust lake.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn more
          </Link>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/matanolabs/matano#--">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <Head>
        <title>Matano | Open source security lake for AWS</title>
      </Head>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}