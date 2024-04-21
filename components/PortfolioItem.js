"use client";
import React, { useEffect, useState } from "react";
import Fade from "./util/Fade";
import Image from "next/image";

const PortfolioItem = (props) => {
  const { portfolio, portfolioFilter, mounted } = props;
  const [showView, setShowView] = useState(false);

  useEffect(() => {
    if (mounted) {
      setShowView(false);
      setTimeout(function () {
        setShowView(
          portfolio.tags.includes(portfolioFilter) !== false ||
            portfolioFilter === "ALL"
        );
      }, 100);
    } else {
      setShowView(false);
    }
  }, [portfolioFilter, portfolio.tags, mounted]);

  return (
    <>
      {showView && (
        <Fade show={showView} className={`portfolio-piece`}>
          <div>
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.altText}
              width={200}
              height={200}
            />
          </div>
          <h3>{portfolio.name}</h3>
          <p>{portfolio.description}</p>
          <div className="portfolio-links">
            {portfolio.siteUrl !== "" && (
              <a
                className="btn"
                href={portfolio.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.siteAria}
              >
                VIEW SITE
              </a>
            )}
            {portfolio.repoUrl !== "" && (
              <a
                className="btn"
                href={portfolio.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portfolio.repoAria}
              >
                VIEW REPO
              </a>
            )}
          </div>
        </Fade>
      )}
    </>
  );
};

export default PortfolioItem;
