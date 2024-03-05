import React from 'react';
import './App.css';
import routes from './Routes';
import {AllRoutes} from './Type';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from './Assets/theme/theme';
import MainLayout from './Components/Main-Layout';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis'

const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
	const getRoutes = (AllRoute: AllRoutes[]): any => AllRoute.map((route) => {
		if (route.route) {
			return (
				<Route key={route.key} path={route.route} element={<>{route.component}</>}/>
			)
		}
		return null
	})
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<MainLayout>
						<Routes>
							{getRoutes(routes)}
						</Routes>
					</MainLayout>
				</BrowserRouter>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;