import { useEffect, useState } from "react";

export default function DynamicIframe() {
  const [iframeURL, setIframeURL] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmk7LY1OWGP8nq1xNSwZ1-8R0-zUFb9ozpzKnuYe3GrlixzRWK0Kiap_xoFbP0bIhLPsXfeMQ6ts2P/pub?output=csv";

  useEffect(() => {
    fetch(googleSheetURL)
      .then((response) => response.text())
      .then((csvData) => {
        const rows = csvData.split("\n").map((row) => row.split(","));
        const iframeLink = rows.length > 1 ? rows[1][1] : ""; // Assuming the first row is header
        if (iframeLink) {
          setIframeURL(iframeLink.trim());
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching iframe URL:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <p>Loading...</p>
      ) : iframeURL ? (
        <iframe
          width="560"
          height="315"
          src={iframeURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Error loading content</p>
      )}
    </div>
  );
}
