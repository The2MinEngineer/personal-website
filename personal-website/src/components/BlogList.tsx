import { GoHeart } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import BlogCard from "./BlogCard";

const BlogList = () => {
	const blogCardDetail = [
		{
			key: 1,
			title: "Navigating the Cloud: A Beginner's Guide",
			desc: "Demystify cloud computing concepts, platforms, and their impact on modern software development.",
			like: <GoHeart className="text-sm text-[#e8e8e8]" />,
			likeCount: "10k",
			message: <AiOutlineMessage className="text-sm text-[#e8e8e8]" />,
			messageCount: "1.5k",
			star: <FaStar className="text-sm text-[#e8e8e8]" />,
			starLabel: "Project",
		},
		{
			key: 2,
			title: "Debugging Dairies: Tales from the Code Trenches",
			desc: "Share personal experiences, challenges, and triumphs in debugging complex code scenerios.",
			like: <GoHeart className="text-sm text-[#e8e8e8]" />,
			likeCount: "10k",
			message: <AiOutlineMessage className="text-sm text-[#e8e8e8]" />,
			messageCount: "1.5k",
		},
		{
			key: 3,
			title: "Tech Trends 2024: What’s on the Horizon?",
			desc: "Explore emerging technologies and trends that are set to make waves in the tech industry.",
			like: <GoHeart className="text-sm text-[#e8e8e8]" />,
			likeCount: "10k",
			message: <AiOutlineMessage className="text-sm text-[#e8e8e8]" />,
			messageCount: "1.5k",
		},
		{
			key: 4,
			title: "Open Source Love: Contributions and Community",
			desc: "Discuss the importance of open source contributions and share your journey of giving back to the community",
			like: <GoHeart className="text-sm text-[#e8e8e8]" />,
			likeCount: "10k",
			message: <AiOutlineMessage className="text-sm text-[#e8e8e8]" />,
			messageCount: "1.5k",
		},
	];
	return (
		<div>
			{blogCardDetail.map((item) => (
				<div key={item.key}>
					<BlogCard
						title={item.title}
						desc={item.desc}
						like={item.like}
						likeCount={item.likeCount}
						message={item.message}
						messageCount={item.messageCount}
						star={item.star}
						starLabel={item.starLabel}
					/>
				</div>
			))}
		</div>
	);
};

export default BlogList;
