import { Button } from "./ui/button";

const Header = () => {
	return (
		<div className="mt-12 mb-20">
			<div className="max-w-[800px]">
				<h1 className="scroll-m-20 text-white text-4xl font-bold tracking-tight lg:text-5xl">
					Welcome to The2MinEngineer's Hub
				</h1>
			</div>
			<div className="mt-5 max-w-[735px]">
				<p className="leading-7 text-[#E8E8E8] text-lg">
					Embark on a journey through the realms of technology with me, Ifeanyi
					Emmanuel, also known as The2MinEngineer. Here, I open the doors to my
					world, sharing not only my blog where I document my experiences and
					insights, but also my portfolio where I showcase my projects and
					achievements.
				</p>
			</div>
			{/* <div>
				<Button className="bg-purple-500">Check out Meetup.com.ng</Button>
			</div> */}
		</div>
	);
};

export default Header;
