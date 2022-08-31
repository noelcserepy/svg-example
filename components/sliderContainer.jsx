export default function SliderContainer({ children }) {
	return (
		<div className="h-min p-4 flex flex-col">
			<p className="text-slate-700 text-xs font-normal">
				(Double click sliders to reset)
			</p>
			{children}
		</div>
	);
}
