import React from 'react'

const middleware = ({store, dispatch, getState}) => next => action => {


  next(action);
};

export default middleware;
