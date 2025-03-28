import { Suspense } from 'react';
import './App.css';
import { staticRoutes } from '@/router/routes';
import AuthRoute from '@/components/AuthRoute';

function App() {
	return (
		<Suspense>
			<AuthRoute routes={staticRoutes} />
		</Suspense>
	);
}

export default App;
