import ListComponent from "../../components/products/ListComponent";

const ListPage = () => {
  return (
      <>
        <div className="w-full mt-4 border border-solid border-neutral-300shadow-md">
          <div className="text-2xl m-4 font-extrabold">
            Products List Page
          </div>

          <ListComponent />
        </div>
      </>
  )
}

export default ListPage;