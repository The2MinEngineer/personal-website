import { ReactElement, useState, useEffect } from "react";

interface BlogAnalyticDataProps {
	icon?: ReactElement;
	iconCount?: string;
}

const BlogAnalyticData: React.FC<BlogAnalyticDataProps> = ({
	icon,
	iconCount,
}) => {
	const [showIconCount, setShowIconCount] = useState<boolean>(true);

	useEffect(() => {
		const handleResize = () => {
			setShowIconCount(window.innerWidth > 950);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<a
			href={iconCount}
			target="_blank"
			className="text-[#e8e8e8] text-sm hover:underline flex items-center gap-2 cursor-pointer"
		>
			<div>{icon}</div>
			{showIconCount && <span>{iconCount}</span>}
		</a>
	);
};

export default BlogAnalyticData;
