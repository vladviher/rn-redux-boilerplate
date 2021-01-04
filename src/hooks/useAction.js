import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export default function useActions(action) {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(action, dispatch),
    [dispatch, action],
  );
}
