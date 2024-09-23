const ResultCardSkeleton = () => {
  return (
    <>
      <div className="grid lg:grid-cols-[2fr_3fr] gap-5 animate-pulse">
        <div className="bg-gray-200 rounded-md w-full h-32 lg:h-48"></div>

        <div className="space-y-10">
          <div className="h-6 bg-gray-200 rounded w-2/4 mt-4"></div>

          <div className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-row flex-wrap gap-1">
              <div className="h-4 bg-gray-200 rounded w-28"></div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <div className="h-4 bg-gray-200 rounded w-40"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 bg-gray-200 rounded w-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCardSkeleton;
