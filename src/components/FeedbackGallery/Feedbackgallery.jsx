function Feedbackgallery() {
    //public\feedback
    const imagePaths = Array.from({ length: 21 }, (_, index) => `/feedback/photo${index + 1}.jpg`);
    imagePaths.splice(4, 1);      // skips the 5th image
  
    return (
        <div className="flex flex-wrap justify-center gap-10 mx-auto px-4 py-4">
        {imagePaths.map((imagePath, index) => (
            <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 bg-gray-200 rounded-md"
            >
            <img src={imagePath} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-md" />
            </div>
        ))}
        </div>
    );
  }
  
  export default Feedbackgallery;
  