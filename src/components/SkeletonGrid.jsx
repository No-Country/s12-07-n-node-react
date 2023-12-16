const SkeletonGrid = () => {
	return (
		<div className='grid grid-cols-3 gap-x-2 gap-y-[3rem] pb-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[4rem]'>
			{Array(13)
				.fill()
				.map((_, idx) => (
					<div
						key={idx}
						className='skeleton-loader relative h-[190px] rounded-md bg-slate-900 md:h-[300px] lg:h-[350px]'
					>
						<div className='absolute left-0 top-0 h-full w-full animate-pulse rounded-md '></div>
					</div>
				))}
		</div>
	);
};

export default SkeletonGrid;
