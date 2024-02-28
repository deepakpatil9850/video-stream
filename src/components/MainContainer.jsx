import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import SubContainer from "./SubContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMini from "./ErrorMini";

const MainContainer = () => {
  return (
    <div className="w-full absolute top-14">
      <ErrorBoundary fallback={<ErrorMini />}>
        <CategoriesBtn />
      </ErrorBoundary>
      <ErrorBoundary fallback={<ErrorMini />}>
        <SubContainer />
      </ErrorBoundary>
    </div>
  );
};

export default MainContainer;
