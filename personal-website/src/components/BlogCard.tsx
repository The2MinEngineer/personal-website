import { ReactElement } from "react";
import BlogAnalyticData from "./BlogAnalyticData";
import { Link } from "react-router-dom";
import Project from "./Project";

interface BlogCardProps {
	link: string;
	title: string;
	desc: string;
	star?: ReactElement;
	github?: ReactElement;
	website?: ReactElement;
	starLabel?: string;
	githubLabel?: string;
	websiteLabel?: string;
	image: any;
	category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	link,
	title,
	desc,
	star,
	github,
	website,
	starLabel,
	githubLabel,
	websiteLabel,
	image,
	category,
}) => {
	return (
		<>
			{/* Desktop */}
			<div className="hidden w-full p-5 bg-[#1D2429] bg-opacity-30 md:p-6 mb-5 md:flex items-center justify-between">
				<div className="flex-1 mr-10">
					<Link to={link}>
						<h1 className="text-white font-bold mb-3 sm:text-lg md:text-2xl hover:underline cursor-pointer">
							{title}
						</h1>
					</Link>
					<p className="text-[#e8e8e8] text-sm sm:text-base mb-3">{desc}</p>

					{category && (
						<div className="flex items-center gap-6">
							<Project
								icon={star}
								iconCount={starLabel}
							/>
							<BlogAnalyticData
								icon={github}
								iconCount={githubLabel}
							/>
							<BlogAnalyticData
								icon={website}
								iconCount={websiteLabel}
							/>
						</div>
					)}
				</div>
				<div>
					<div className="h-[140px] w-[140px]">
						<img
							src={image}
							alt="img"
							className="w-full h-full object-cover rounded-[20px]"
						/>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="w-full p-5 bg-[#1D2429] bg-opacity-30 md:p-6 mb-5 items-center justify-between block md:hidden">
				<div>
					<div className="h-[200px] w-full">
						<img
							src={image}
							alt="img"
							className="w-full h-full object-cover rounded-[20px]"
						/>
					</div>
				</div>
				<div className="mt-4">
					<Link to={link}>
						<h1 className="text-white font-bold mb-3 sm:text-lg md:text-2xl hover:underline cursor-pointer">
							{title}
						</h1>
					</Link>
					<p className="text-[#e8e8e8] text-sm sm:text-base mb-3">{desc}</p>
					{category && (
						<div className="flex items-center gap-6">
							<Project
								icon={star}
								iconCount={starLabel}
							/>
							<BlogAnalyticData
								icon={github}
								iconCount={githubLabel}
							/>
							<BlogAnalyticData
								icon={website}
								iconCount={websiteLabel}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default BlogCard;
