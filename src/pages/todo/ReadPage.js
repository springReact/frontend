import React, {useCallback} from "react";
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = ((props) => {


  const navigate = useNavigate();
  const {tno} = useParams();

  const [queryParams] = useSearchParams();

  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 6;
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 30;

  const queryStr = createSearchParams({page: page, size: size}).toString();

  console.log(tno)

  const moveToModify = useCallback((tno) => {
    navigate({pathname:`/todo/modify/${tno}`})
  },[tno])


  const moveToList = () => {
    navigate({
      pathname: `/todo/list`,
      search: queryStr
    })
  }

  return (
      <>
        <div className="font-extrabold w-full bg-white mt-6">
          <div className={'text-3xl'}>
            Todo Read Page Component {tno}
          </div>

          <ReadComponent tno={tno}/>
        </div>
      </>
  );
})

export default ReadPage;