import { useEffect, useState } from 'react';

const MouseFollower = ({ enabled, setEnabled }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			const { clientX, clientY } = event;
			setMousePosition({ x: clientX, y: clientY });
		};
		if (enabled) {
			window.addEventListener('pointermove', handleMouseMove);
		}
		return () => {
			window.removeEventListener('pointermove', handleMouseMove);
		};
	}, [enabled]);
	return (
		<>
			{enabled && (
				<div
					className="absolute pointer-events-none"
					style={{
						left: mousePosition.x,
						top: mousePosition.y,
						transform: 'translate(-50%, -50%)',
					}}
				>
					<div className="w-8 h-8 bg-red-500 rounded-full"></div>
				</div>
			)}

			<button
				type="button"
				className="text-blue-300 border border-blue-300 px-4 py-2 rounded-md mt-4 hover:bg-blue-500 hover:text-white transition-colors"
				onClick={() => setEnabled(!enabled)}
			>
				{enabled ? 'Disable' : 'Enable'} Mouse Follower
			</button>
		</>
	);
};

export default MouseFollower;
