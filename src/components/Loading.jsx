import React from "react";
import { useRecoilValue } from 'recoil'
import { loadingState } from '../recoil/loading'

export const Loading = () => {
  const loading = useRecoilValue(loadingState)
  return loading ? <div>Loading</div> : ''
}