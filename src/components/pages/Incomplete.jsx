import MainDesign from "./MainDesign";

const Incomplete = () => {
  return (
    <div className="bg-gray-200 w-[580px] ">
      <div className="flex justify-between items-center px-8 py-5">
        <h1>
          <button
            class="cursor-pointer w-8 h-4 bg-red-500 rounded-lg border-red-600
              border-b-[4px] "
          ></button>
          <span className="ms-3">Incomplete</span>
        </h1>
        <h1 className="bg-gray-300 py-1 px-2 rounded-md">0</h1>
      </div>

      <div className="max-h-screen overflow-y-scroll ">
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
        <MainDesign></MainDesign>
      </div>
    </div>
  );
};

export default Incomplete;
