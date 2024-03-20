import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
	return (
		<div className="w-full p-5 bg-[#1D2429] bg-opacity-30 md:p-6 mb-5 flex items-center justify-between">
			<div className="flex-1 mr-10">
				<Skeleton className="h-4 w-[350px] mb-3" />
				<Skeleton className="h-4 w-[550px] mb-3" />
				<div className="flex items-center gap-3">
					<Skeleton className="h-2 w-2 rounded-full" />
					<Skeleton className="h-2 w-2 rounded-full" />
					<Skeleton className="h-2 w-2 rounded-full" />
				</div>
			</div>
			<div>
				<div className="h-[140px] w-[140px]">
					<Skeleton className="h-[140px] w-[140px] rounded-xl" />
				</div>
			</div>
		</div>
	);
};

export default BlogCardSkeleton;
