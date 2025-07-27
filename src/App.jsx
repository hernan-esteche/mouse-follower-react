import { useState } from 'react';
import MouseFollower from './components/MouseFollower';
import './App.css';

function App() {
	const [enabled, setEnabled] = useState(false);

	return (
		<main
			className={`h-screen flex flex-col items-center justify-center bg-gray-900 ${enabled ? 'cursor-crosshair' : ''}`}
		>
			<h1 className="text-4xl font-bold text-center mt-10 text-blue-500">
				Mouse Follower
			</h1>
			<MouseFollower enabled={enabled} setEnabled={setEnabled} />
		</main>
	);
}

export default App;
