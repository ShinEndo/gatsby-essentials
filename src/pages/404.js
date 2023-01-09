import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default () => {
  return (
    <Layout>
      <SEO
        pagetitle="ESSENTIALについて"
        pagedesc="食べ物について情報を発信しているサイトです。"
      />
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>
        お探しのページが見つかりませんでした
      </h1>
    </Layout>
  );
};
