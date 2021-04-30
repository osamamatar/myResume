import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import WorkItem from "../components/WorkItem";
import i1 from "../assets/1.gif";
import i2 from "../assets/2.gif";
import i3 from "../assets/3.gif";
import i4 from "../assets/4.gif";
import i5 from "../assets/5.gif";
import i6 from "../assets/6.gif";
import i7 from "../assets/7.gif";
import i8 from "../assets/8.gif";
const Work = (props) => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8];
  useEffect(() => {
    props.getRepos();

    //eslint-disable-next-line
  }, []);
  if (props.loading)
    return (
      <section>
        <Spinner />
      </section>
    );
  return (
    <section>
      <div className='title'>
        <h1>Some of our finest work</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          iusto molestias accusamus rem nobis est, et laborum harum doloremque
          nemo non, minima quos totam labore
        </p>
      </div>

      <div className='portfolio'>
        {props.repos.map((repo) => (
          <WorkItem key={repo.id} image={images.pop()} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Work;
