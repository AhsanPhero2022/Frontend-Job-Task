import React, { useState } from "react";

function MainDesign() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // here is the api method
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });

      await axios.post("http://your-laravel-api-url/upload", formData);

      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error.message);
    }
  };

  return (
    <>
      <div className="relative shadow-xl rounded-md bg-white border w-[546px] border-gray-300 mx-2 my-8">
        <div className="flex flex-col px-4">
          <div className="flex items-center mb-12 justify-between p-2">
            <div className="flex items-center gap-3 ">
              <img
                className="w-8 h-8 ms-2 rounded-full"
                src="https://img.freepik.com/free-photo/portrait-young-man-showing-ok-gesture-against-gray_144627-63819.jpg?size=626&ext=jpg"
                alt=""
              />
              <h3>Client Name</h3>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-8  rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ou8jSYXOLBPoJfpd5E2Fv313uzfF-yzGfQ&usqp=CAU"
                alt=""
              />
              <h3>Sadik Isteak</h3>
            </div>
          </div>

          <div className="flex  mb-8 gap-3">
            {/* Attach file start */}

            <div className="p-4">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="attachmentInput"
                multiple
              />

              {selectedFiles.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold mt-4">
                    Selected Files: {selectedFiles.length}
                  </h2>
                  <ul className="list-disc pl-6">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{`${file.name} (${file.type})`}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFiles.length > 0 && (
                <div
                  className={`fixed inset-0 bg-black bg-opacity-50 ${
                    isModalOpen ? "" : "hidden"
                  }`}
                  onClick={closeModal}
                ></div>
              )}

              <div
                className={`fixed top-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md ${
                  isModalOpen ? "" : "hidden"
                }`}
              >
                <h2 className="text-lg font-bold mb-4">Selected Files:</h2>
                <ul className="list-disc pl-6">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{`${file.name} (${file.type})`}</li>
                  ))}
                </ul>
                <button
                  onClick={closeModal}
                  className="mt-4 btn btn-warning text-black px-4 py-2"
                >
                  Close Modal
                </button>
              </div>
            </div>

            {/* Attach file end  */}
            <div className="relative  group cursor-pointer">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.25 15.75v4.5A2.257 2.257 0 0 0 4.5 22.5h15a2.256 2.256 0 0 0 2.25-2.25v-4.5"></path>
                <path d="M2.25 15.75H9"></path>
                <path d="M15 15.75h6.75"></path>
                <path d="M9 15.75a3 3 0 0 0 6 0"></path>
                <path d="M18 1.5H6c-1.219 0-2.016.656-2.25 1.875L2.25 9v4.5a2.257 2.257 0 0 0 2.25 2.25h15a2.256 2.256 0 0 0 2.25-2.25V9l-1.5-5.625C20.016 2.109 19.172 1.5 18 1.5Z"></path>
                <path d="M2.25 9H9"></path>
                <path d="M15 9h6.75"></path>
                <path d="M9 9a3 3 0 1 0 6 0"></path>
              </svg>
              <span className="w-[100px] absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Total File: {selectedFiles.length}
              </span>
            </div>
            <h2>
              {selectedFiles.length}/{selectedFiles.length}
            </h2>
          </div>
          <div className=" py-3 flex gap-1  rounded-md">
            {/* Group 1 */}
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-8 items-center justify-center rounded-full ">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://img.freepik.com/free-photo/young-confident-man-red-shirt-with-optical-glasses-points-side-looks-isolated-orange-wall_141793-35256.jpg?size=626&ext=jpg&ga=GA1.1.1843431213.1701957864&semt=ais"
                  alt=""
                />
              </div>
              <span className="w-full absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Name
              </span>
            </div>

            {/* Group 2 */}
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-8 items-center justify-center rounded-full ">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://img.freepik.com/premium-photo/young-caucasian-handsome-man-isolated-blue-making-doubts-gesture-looking-side_1368-171519.jpg?w=740"
                  alt=""
                />
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                User
              </span>
            </div>
            {/* group 3 */}
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-8 items-center justify-center  ">
                <div className="flex bg-gray-200 rounded-full p-1">
                  <h1>12</h1>
                  <span>+</span>
                </div>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Total
              </span>
            </div>
            {/* group 4  */}
            <div className="group relative px-4 cursor-pointer flex items-center">
              <div className="flex h-10 w-8 items-center justify-center rounded-full hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="currentColor"
                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                  ></path>
                </svg>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Messages
              </span>
              <h1>15</h1>
            </div>
            {/* Group 5   */}
            <div className="group relative px-4 cursor-pointer flex items-center">
              <div className="flex h-10 w-8 items-center justify-center rounded-full hover:text-blue-500">
                <label htmlFor="attachmentInput" className=" cursor-pointer">
                  <svg
                    height="24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.13 8.998v6.743a1.878 1.878 0 0 0 3.757 0l.006-8.838a3.186 3.186 0 1 0-6.37 0v8.898a4.477 4.477 0 1 0 8.954 0V7.486"></path>
                  </svg>
                </label>
              </div>
              <span className="w-[140px] absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Upload an Attach
              </span>
              <h2>{selectedFiles.length}</h2>
            </div>
            {/* Group 6  */}
            <div className="group relative px-4 cursor-pointer flex items-center">
              <div className="flex h-10 w-8 items-center justify-center rounded-full hover:text-blue-500">
                <svg
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.5 3.75h-15A2.25 2.25 0 0 0 2.25 6v13.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Z"></path>
                  <path d="M6 2.25v1.5"></path>
                  <path d="M18 2.25v1.5"></path>
                  <path d="M21.75 7.5H2.25"></path>
                  <path d="m14.25 12.188 2.035-1.5h.215v7.874"></path>
                  <path d="M8.995 14.373c.427 0 1.209-.2 1.721-.725a1.777 1.777 0 0 0 .522-1.278c0-1.224-1.06-1.87-2.245-1.87-1.003 0-1.571.544-1.774.887"></path>
                  <path d="M6.984 17.54c.23.388.924 1.212 2.057 1.212 1.34 0 2.443-.747 2.443-2.054 0-.592-.171-1.125-.542-1.504-.58-.592-1.465-.819-1.948-.819"></path>
                </svg>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Calender
              </span>
              <h1>30-12-2022</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDesign;
