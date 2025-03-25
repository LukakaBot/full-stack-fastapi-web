import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

const AppLayout = lazy(() => import('@/layout/AppLayout'));
const HomePage = lazy(() => import('./pages/home/index'));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<HomePage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
