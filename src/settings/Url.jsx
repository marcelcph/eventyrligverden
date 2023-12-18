import React from "react";

function Url() {
  return (
    <div>
      <p>WordPress URL: {env.wordpress_url}</p>
      <p>Consumer Key: {env.consumer_key}</p>
      <p>Consumer Secret: {env.consumer_secret}</p>
    </div>
  );
}

export default Url;
