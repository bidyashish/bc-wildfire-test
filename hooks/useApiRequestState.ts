import { requestInitialState } from "@/lib/types";
import React from "react";

export const useGetApiRequestState = () => {
  const [requestState, setRequestState] = React.useState(requestInitialState);

  return {
    requestState,
    setRequestState,
  };
};
