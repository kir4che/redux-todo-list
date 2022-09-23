import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

ReactDOM.render(
	<React.StrictMode>
		{/* store 已傳入，再用 useSelector 拿到 sotre。
    透過 Provider 渲染頁面 */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
