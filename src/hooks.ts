import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// 用於獲取 AppDispatch，即用於 dispatch action 的函式
export const useAppDispatch = () => useDispatch<AppDispatch>()
// 當使用 useAppSelector hook 時，它將返回與 RootState 類型匹配的狀態
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
