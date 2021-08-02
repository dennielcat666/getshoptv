export function scalePage(elem) {
	const currentWidth = elem.current.offsetWidth;
	const currentHeight = elem.current.offsetHeight;

	const availableHeight = window.innerHeight;
	const availableWidth = window.innerWidth;

	const scaleX = availableWidth / currentWidth;
	const scaleY = availableHeight / currentHeight;
	
	const translationX = Math.round((availableWidth - (currentWidth * scaleX)) / 2);
	const translationY = Math.round((availableHeight - (currentHeight * scaleY)) / 2);

	elem.current.style.transform = `translate(${translationX}px, ${translationY}px) scale3d(${scaleX}, ${scaleY}, 1)`;
}