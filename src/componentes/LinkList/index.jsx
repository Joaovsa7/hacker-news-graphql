import React from "react";
import { Query } from "react-apollo";
import Link from "../Link/index";
import Loading from "../Loading";
import { FEED_QUERY } from "../../graphql/queryes.js";

const LinkList = () => (
  <>
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <div>error</div>;
        console.log(data.feed);
        const linksToRender = data.feed.links;
        return linksToRender.map(link => <Link key={link.id} link={link} />);
      }}
    </Query>
  </>
);

export default LinkList;
