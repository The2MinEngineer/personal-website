import { useEffect, useState } from "react";
import client from "@/client";
import BlockContent from "@sanity/block-content-to-react";
import { useParams } from "react-router-dom";

import "./Blog.css";

interface PostData {
	title: string;
	description: string;
	category: string;
	body: any;
	mainImage: {
		asset: {
			url: string;
		};
	};
}

const Blog = () => {
	const [postData, setPostData] = useState<PostData | null>(null);
	const { slug } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(
					`*[slug.current == "${slug}"]{title, description, slug, mainImage{asset->{_id, url}}, body}`
				);
				setPostData(data[0]);
			} catch (error) {
				console.error("Error fetching post data:", error);
			}
		};

		fetchData();
	}, [slug]);

	if (!postData) {
		return <div>Loading...</div>;
	}

	const { title, description, mainImage, body } = postData;

	return (
		<div className="w-full md:px-[120px] px-6 relative">
			<div className="max-w-[1272px] w-full mx-auto mt-16">
				<div className="w-full">
					<img
						src={mainImage.asset.url}
						alt={title}
						className="h-[623px] w-full object-cover"
					/>
				</div>

				<div className="mt-3">
					<h1 className="text-white font-bold text-[54px] w-full max-w-[840px] mb-4">
						{title}
					</h1>
					<p className="text-[#E8E8E8] italic font-medium text-lg w-full max-w-[840px]">
						{description}
					</p>
				</div>

				<div className="mt-10 text-[#E8E8E8]">
					<BlockContent
						blocks={body}
						projectId="f65w1myo"
						dataset="production"
						className="post"
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
