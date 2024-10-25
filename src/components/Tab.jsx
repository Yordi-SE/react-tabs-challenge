import React, { useEffect } from "react";
import { useGetTextsQuery } from "../lib/features/api/api";
import { useSelector } from "react-redux";

function Tab() {
  const activeTab = useSelector((state) => state.active.active);
  const { data, isFetching, isSuccess, isError, error, isLoading } =
    useGetTextsQuery(activeTab);

  // console.log("data", data);
  // console.log("isFetching", isFetching);
  // console.log("isSuccess", isSuccess);
  // console.log("isError", isError);
  // console.log("error", error);
  let content;
  if (isSuccess) {
    content = (
      <>
        {" "}
        <h2 className="text-xl font-semibold">Title {activeTab}</h2>
        <p className="mt-4 text-sm  text-gray-500">{data}</p>
      </>
    );
  }
  if (isError) {
    content = <p>Error:</p>;
  }
  if (isLoading || isFetching) {
    content = (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start justify-center w-3/4 m-auto">
      {content}
    </div>
  );
}

export default Tab;
