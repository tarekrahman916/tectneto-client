import React, { useEffect, useState } from "react";

import ArticleCard from "../../components/ArticleCard";

const Home = () => {
  const [articles, setArticles, tags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.data));
  }, []);
  return (
    <div>
      <div className="max-w-7xl gap-14 mx-auto my-10">
        <div className="mb-10 flex justify-end gap-5">
          <div className="form-control  max-w-xs">
            <label className="label">
              <span className="label-text text-base font-bold">Short By</span>
            </label>
            <select className="select select-bordered">
              <option>Last Upload</option>
              <option>First Upload</option>
            </select>
          </div>
          <div className="form-control  max-w-xs">
            <label className="label">
              <span className="label-text text-base font-bold">
                Short By Date
              </span>
            </label>
            <input type="date" className="input input-bordered " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
