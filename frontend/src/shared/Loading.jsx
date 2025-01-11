const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-dashed border-transparent border-t-blue-500"></div>
          <div className="absolute inset-2 animate-spin-slow rounded-full border-4 border-dashed border-transparent border-t-purple-500"></div>
        </div>

        <p className="text-gray-800 text-xl font-bold">
          Loading...<span className="ml-1 animate-bounce">...</span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
