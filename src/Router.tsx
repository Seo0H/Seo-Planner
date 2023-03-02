import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TimeBlockPage from './pages/TimeBlockPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TimeBlockPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
