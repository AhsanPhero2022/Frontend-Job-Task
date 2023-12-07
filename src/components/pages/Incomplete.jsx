import React from "react";

function Incomplete() {
  return (
    <>
      <div className="flex flex-col  items-center">
        <div className="flex items-center gap-8 justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-8 rounded-full"
              src="https://media.licdn.com/dms/image/D4D03AQFcPq9QKTqCoA/profile-displayphoto-shrink_400_400/0/1684350763543?e=1702512000&v=beta&t=aRL4373NzPvG8m3UCLhB4YQKmydXkFdJxKkYVryCBos"
              alt=""
            />
            <h3>Client Name</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ou8jSYXOLBPoJfpd5E2Fv313uzfF-yzGfQ&usqp=CAU"
              alt=""
            />
            <h3>Sadik Isteak</h3>
          </div>
        </div>
        <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md">
          <div className="group relative px-4 cursor-pointer">
            <div className="flex h-10 w-8 items-center justify-center rounded-full ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ou8jSYXOLBPoJfpd5E2Fv313uzfF-yzGfQ&usqp=CAU"
                alt=""
              />
            </div>
            <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              Name
            </span>
          </div>

          <div className="group relative px-4 cursor-pointer">
            <div className="flex h-10 w-8 items-center justify-center rounded-full ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ou8jSYXOLBPoJfpd5E2Fv313uzfF-yzGfQ&usqp=CAU"
                alt=""
              />
            </div>
            <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              User
            </span>
          </div>

          <div className="group relative px-4 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
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
          </div>
          <div className="group relative px-4 cursor-pointer">
            <div className="flex h-10 w-8 items-center justify-center  ">
              <div className="flex bg-gray-200 rounded-full p-1">
              <h1>12</h1>
              <span>+</span>
              </div>
            </div>
            <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              User
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Incomplete;
