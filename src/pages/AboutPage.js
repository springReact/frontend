import React from "react";
import {Link} from "react-router-dom";

const AboutPage = ((props) => {
  return (
      <>
        <div className={'text-3xl'}>
          About Page
        </div>
        <div>
          <Link to={'/'}>Main Page</Link>
        </div>
      </>
  );
})

export default AboutPage;