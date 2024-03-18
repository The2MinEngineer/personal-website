import { ReactElement } from "react";

interface BlogAnalyticDataProps {
	icon?: ReactElement;
	iconCount?: string;
}

const BlogAnalyticData: React.FC<BlogAnalyticDataProps> = ({
	icon,
	iconCount,
}) => {
	return (
		<div className="flex items-center gap-2 text-[#e8e8e8]">
			<div className="cursor-pointer">{icon}</div>
			<span className="text-[#e8e8e8] text-sm">{iconCount}</span>
		</div>
	);
};

export default BlogAnalyticData;
