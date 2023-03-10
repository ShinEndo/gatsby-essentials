import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default ({ location }) => {
  return (
    <Layout>
      <SEO pagetitle="ページが見つかりません" pagepath={location.pathname} />
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>
        お探しのページが見つかりませんでした
      </h1>
    </Layout>
  );
};
