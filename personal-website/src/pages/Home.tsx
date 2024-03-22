import BlogList from "@/components/BlogList";
import Header from "@/components/Header";

const Home = () => {
	return (
		<div className="w-full md:px-[120px] px-6 relative">
			<div className="max-w-[1272px] w-full mx-auto">
				<Header />
				<BlogList />
			</div>
		</div>
	);
};

export default Home;
