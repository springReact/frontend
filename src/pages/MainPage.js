import React from 'react';
import {Link} from "react-router-dom";

const MainPage = ((props) => {
  return (
      <div className={'text-3xl'}>
        <div className={'flex'}>
          <Link to={'/about'}>About</Link>
        </div>
        <div>Main Page</div>
      </div>
  )
})

export default MainPage;