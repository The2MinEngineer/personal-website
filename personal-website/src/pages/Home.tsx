import BlogList from "@/components/BlogList";
import Header from "@/components/Header";

const Home = () => {
	return (
		<div className="w-full md:px-[120px] px-6 relative">
			<div className="max-w-[1272px] w-full mx-auto">
				{/* <div className="bg-[#E211B4] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-30 blur-[400px] h-[450px] w-[650px]"></div> */}
				<Header />
				<BlogList />
			</div>
		</div>
	);
};

export default Home;
