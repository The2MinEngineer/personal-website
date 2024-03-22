import { useEffect, useState } from "react";
import client from "@/client";

import { FaStar } from "react-icons/fa";
import BlogCard from "./BlogCard";

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
					`*[_type == "post"]{title, description, category, slug, mainImage{asset->{_id, url}}}`
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
		return <p className="text-white text-xl mt-4 italic">Please wait...</p>;
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
