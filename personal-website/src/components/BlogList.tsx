import { useEffect, useState } from "react";
import client from "@/client";

import { GoHeart } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

interface Post {
	slug: {
		current: string;
	};
	title: string;
	description: string;
	category: string;
	mainImage: {
		asset: {
			url: string;
		};
	};
}

const BlogList = () => {
	const [allPosts, setAllPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(
					`*[_type == "post"]{title, description, slug, mainImage{asset->{_id, url}}}`
				);
				setAllPosts(data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};

		fetchData();
	}, []);
	console.log(allPosts);

	if (allPosts.length === 0) {
		return (
			<div className="flex flex-col gap-3">
				<BlogCardSkeleton />
				<BlogCardSkeleton />
				<BlogCardSkeleton />
			</div>
		);
	}

	return (
		<div>
			{allPosts &&
				allPosts.map((post, index) => (
					<div key={index}>
						<BlogCard
							link={"/" + post.slug.current}
							title={post.title}
							desc={post.description}
							like={<GoHeart className="text-sm text-[#e8e8e8]" />}
							// likeCount={item.likeCount}
							message={<AiOutlineMessage className="text-sm text-[#e8e8e8]" />}
							// messageCount={item.messageCount}
							star={<FaStar className="text-sm text-[#e8e8e8]" />}
							starLabel={post.category}
							image={post.mainImage.asset.url}
						/>
					</div>
				))}
		</div>
	);
};

export default BlogList;
