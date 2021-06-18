import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Wiki",
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: <>This is my Wikipedia</>,
  },
  {
    title: "Peace of Mind",
    // imageUrl: "img/undraw_docusaurus_tree.svg",
    description: <>Think independently, know yourself, just seek peace of mind </>,
  },
  {
    title: "Skill",
    // imageUrl: "img/undraw_docusaurus_react.svg",
    description: <>
      1.Linux, 2.Algorithm, 3.Online_Judge, 4.Programming_Language,
      5.Operating_System, 6.Network, 7.Server, 8.SQL,
      9.Programming_Stardard, 10.Skill, 11.Interview,
      Reading Notes, Self-knowledge
      </>
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              //to={useBaseUrl("docs/")}
              to={useBaseUrl("intro/")}
            >
              点击开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
