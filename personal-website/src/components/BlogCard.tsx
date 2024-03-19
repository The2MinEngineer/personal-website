import { ReactElement } from "react";
import BlogAnalyticData from "./BlogAnalyticData";

interface BlogCardProps {
	title: string;
	desc: string;
	like: ReactElement;
	likeCount: string;
	message: ReactElement;
	messageCount: string;
	star?: ReactElement;
	starLabel?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	title,
	desc,
	like,
	likeCount,
	message,
	messageCount,
	star,
	starLabel,
}) => {
	return (
		<div className="w-full p-5 bg-[#1D2429] bg-opacity-30 md:p-6 mb-5 flex items-center justify-between">
			<div className="flex-1 mr-10">
				<h1 className="text-white font-bold mb-3 sm:text-lg md:text-2xl hover:underline cursor-pointer">
					{title}
				</h1>
				<p className="text-[#e8e8e8] text-sm sm:text-base mb-3">{desc}</p>
				<div className="flex items-center gap-6">
					<BlogAnalyticData
						icon={like}
						iconCount={likeCount}
					/>
					<BlogAnalyticData
						icon={message}
						iconCount={messageCount}
					/>
					<BlogAnalyticData
						icon={star}
						iconCount={starLabel}
					/>
				</div>
			</div>
			<div>
				<div className="h-[140px] w-[140px]">
					<img
						src="https://i.pinimg.com/564x/43/0c/59/430c597c8590aeba5e8b93365fc418b0.jpg"
						alt="img"
						className="w-full h-full object-cover rounded-[20px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
