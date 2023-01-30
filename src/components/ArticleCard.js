import React from "react";

const ArticleCard = ({ article }) => {
  const { image, model, tags, date } = article;
  return (
    <div>
      <article className="flex flex-col bg-gray-900">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 bg-gray-500"
            src={image}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
            <span>{date}</span>
            <span>2.1K views</span>
          </div>
          <h3 className="flex-1 py-2 text-base text-white   leading-snug  text-justify">
            {model} <br />
            <a href="" className="text-blue-700 font-semibold">
              See more...
            </a>
          </h3>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, i) => (
              <button
                key={i}
                className="btn btn-sm text-xs tracking-wider uppercase hover:underline text-violet-400"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
