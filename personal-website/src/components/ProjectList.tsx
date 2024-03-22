import { useEffect, useState } from 'react'
import client from "@/client";

import { FaStar } from "react-icons/fa";

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

const ProjectList = () => {
    const [allProjects, setAllProjects] = useState<Post[]>([]);

    useEffect(() => {
			const fetchData = async () => {
				try {
					const data = await client.fetch(
						`*[_type == "post"]{title, description, category, slug, mainImage{asset->{_id, url}}}`
					);
					setAllProjects(data);
				} catch (error) {
					console.error("Error fetching posts:", error);
				}
			};

			fetchData();
		}, []);
		console.log(allProjects);
    
  return (
    <div>ProjectList</div>
  )
}

export default ProjectList