import React, { useState, useEffect } from "react";
import Axios from "axios";

const MediumBlog = () => {
  const [profile, setProfile] = useState({
    ptitle: "",
    name: "",
    avtar: "",
    profileurl: "",
  });
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@becker_r15";

  useEffect(() => {
    Axios.get(mediumURL)
      .then((data) => {
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items;
        const posts = res.filter((item) => item.categories.length > 0);
        const title = data.data.feed.title;

        setProfile({
          ptitle: title,
          profileurl: profileLink,
          avtar: avatar,
        });
        setItem(posts);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toJSON());
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{item.map((post, index) => ({ post }))}</div>;
};

export default MediumBlog;
