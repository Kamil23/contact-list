export type NetworkStartState = {
  type: 'FETCH_START'
};

export type NetworkSuccessState = {
  type: 'FETCH_SUCCESS',
  payload: unknown[]
};

export type NetworkErrorState = {
  type: 'FETCH_ERROR'
};

export type ActionType =
  | NetworkStartState
  | NetworkSuccessState
  | NetworkErrorState;