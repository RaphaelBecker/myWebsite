import React from "react";
import { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import GitProjectCard from "./SmallComponents/GitProjectCard";

const GithubPins = () => {
  const [pinnedItems, setPinnedItems] = useState([]);
  console.log(pinnedItems);

  useEffect(() => {
    // Fetch pinned items and update the state
    getStaticProps().then((data) => {
      setPinnedItems(data.pinnedItems);
    });
  }, []);

  return (
    <div className="min-h-screen p-8 pb-16">
      <center>
        <div className="text-4xl font-bold p-8 text-gray-800">
          My pinned GitHub projects:
        </div>
      </center>
      <div className="flex flex-wrap justify-center gap-8">
        {pinnedItems.map((item) => (
          <GitProjectCard key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "RaphaelBecker") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  homepageUrl
                  createdAt
                  description
                  watchers {
                    totalCount
                  }
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);

  return {
    pinnedItems,
  };
}

export default GithubPins;
