import { ModelHubContext } from "@context/ModelHubContext";
import React, { useContext } from "react";

// const SearchIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       fill="currentColor"
//       className="bi bi-search"
//       viewBox="0 0 16 16"
//     >
//       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//     </svg>
//   );
// };

const Header = () => {
  const { setListVisible } = useContext(ModelHubContext);
  return (
    <div className="hero min-h-screen transition-all">
      <div className="hero-content text-center w-full">
        <div className="w-1/2 focus-within:w-2/3 transition-all">
          <h1 className="text-5xl font-bold transition-all group-focus-within:opacity-0">
            ModelHub
          </h1>
          <p className="py-2 text-lg transition-all group-focus-within:opacity-0">
            Your best fellow AI researcher!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setListVisible && setListVisible(true);
            }}
            className="form-control w-full py-10 flex justify-between items-center relative"
          >
            <input
              type="text"
              placeholder="ResNet50"
              className="input input-bordered bg-primary focus:bg-primary-focus w-full text-lg py-5 transition-all focus:-mt-80"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
