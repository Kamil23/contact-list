import { useState, useEffect, useReducer, useCallback } from "react";
import { PersonData } from "src/App";
import { ActionType } from "../types";

interface State extends FinalizeInfo {
 data: unknown[]
}

export interface FinalizeInfo {
  isLoading: boolean,
  isError: boolean,
}

const dataReducer = (state: State, action: ActionType): State => {
  debugger;
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [
          ...state.data,
          ...action.payload,
        ],
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
  }
};

export function useFetch<T>(fetcher: () => Promise<T[]>, initialData: PersonData[]) {
  const [fetchCount, setFetchCount] = useState(0);

  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
 
  // callback for load more data, used in useEffect dependency array below
  const fetchAgain = useCallback(() => {
    setFetchCount(prevCount => prevCount + 1);
  }, [setFetchCount]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
 
      try {
        const payload = await fetcher();
        dispatch({ type: 'FETCH_SUCCESS', payload });
      } catch (error) {
          dispatch({ type: 'FETCH_ERROR' });
      }
    };
 
    fetchData();
  }, [fetcher, fetchCount]);
 
  return {
    ...state,
    fetchAgain
  };
};