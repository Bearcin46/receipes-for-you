import React from "react";

const Header = () => {
  return (
    <div className="bg-[#7da751] px-5 py-3 flex items-center justify-between *:text-white ">
      <div className="flex gap-1 items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.2 11l4.1-6.5l1.7 1l-3.4 5.5zm-.6 1H2v3c0 3.9 3.1 7 7 7h6c3.9 0 7-3.1 7-7v-3z"
          ></path>
        </svg>
        <h1 className="text-3xl fon font-bold ">Receipe's For you</h1>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 24 24"
          className="cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M12.026 2a9.975 9.975 0 0 0-3.153 19.439c.5.09.679-.217.679-.481c0-.237-.008-.865-.011-1.7c-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 0 0-1.107-1.459c-.9-.619.069-.605.069-.605c.64.088 1.205.467 1.527 1.028a2.124 2.124 0 0 0 2.9.829c.046-.506.272-.979.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 0 1 1.026-2.671a3.588 3.588 0 0 1 .1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 0 1 4.992 0c1.906-1.291 2.742-1.021 2.742-1.021c.37.835.405 1.78.1 2.64a3.84 3.84 0 0 1 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.48.49.725 1.162.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479A9.975 9.975 0 0 0 12.026 2Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
