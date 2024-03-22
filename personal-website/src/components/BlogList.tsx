import { useEffect, useState } from "react";
import client from "@/client";

import { FaStar, FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import BlogCard from "./BlogCard";

interface Post {
	slug: {
		current: string;
	};
	title: string;
	description: string;
	github: string;
	website: string;
	category?: string;
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
					`*[_type == "post"]{title, description, category, website, github, slug, mainImage{asset->{_id, url}}}`
				);
				setAllPosts(data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};

		fetchData();
	}, []);

	if (allPosts.length === 0) {
		return <p className="text-white text-xl mt-4 italic">Please wait...</p>;
	}

	return (
		<div>
			{allPosts.map((post, index) => (
				<div key={index}>
					<BlogCard
						link={"/" + post.slug.current}
						title={post.title}
						desc={post.description}
						image={post.mainImage.asset.url}
						category={post.category} // Pass category to BlogCard
						// Pass star, github, website and their respective labels conditionally based on category existence
						{...(post.category && {
							star: <FaStar className="text-sm text-[#e8e8e8]" />,
							starLabel: post.category,
							github: <FaGithub className="text-sm text-[#e8e8e8]" />,
							githubLabel: post.github,
							website: <BiWorld className="text-sm text-[#e8e8e8]" />,
							websiteLabel: post.website,
						})}
					/>
				</div>
			))}
		</div>
	);
};

export default BlogList;
