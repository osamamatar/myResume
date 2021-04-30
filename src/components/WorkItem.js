import React from "react";

function WorkItem({ repo, image }) {
  return (
    <>
      <div className='item'>
        <img src={image} alt='' />
        <h3>{repo.name}</h3>
        <p>
          <strong style={{ display: "block", color: "brown" }}>
            {repo.language}
          </strong>
          {repo.description}
        </p>
        <div className='action'>
          <a
            href={repo.homepage ? repo.homepage : repo.html_url}
            rel='noreferrer'
            target='_blank'
          >
            Launch
          </a>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
