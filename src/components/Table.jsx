import React from "react";

const Table = ({ recipes }) => {
  console.log(recipes);
  var tableRow = recipes.map((recipe, index) => (
    <tr key={index} className="bg-white border-b text-black">
      <td className="px-6 py-4">{index + 1}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
      >
        {recipe.foodName}
      </th>

      <td className="px-6 py-4">{recipe.typeOfFood}</td>
      <td className="px-6 py-4">{recipe.incrediants}</td>
      <td className="px-6 py-4">{recipe.steps}</td>
      <td className="px-6 py-4">
        <div className="flex gap-8 items-center">
          {/* edit */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className="text-green-700 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="m10 21l4-4h8v4Zm8.3-12.075l-4.25-4.2L16.875 1.9L21.1 6.125ZM2 21v-4.25l10.6-10.6l4.25 4.25L6.25 21Z"
            ></path>
          </svg>
          {/* delete */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className="text-red-600 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            ></path>
          </svg>
        </div>
      </td>
    </tr>
  ));
  return (
    <section className="my-0">
      <h1 className="text-3xl  font-bold mb-9">Added recipes :</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-md ">
          <thead className="text-xs text-white uppercase bg-[#61813f]">
            <tr>
              <th scope="col" className="px-6 py-3 w-20">
                S. No
              </th>
              <th scope="col" className="px-6 py-3">
                recipe Name
              </th>
              <th scope="col" className="px-6 py-3">
                Veg/Non-veg
              </th>
              <th scope="col" className="px-6 py-3">
                Incrediants
              </th>
              <th scope="col" className="px-6 py-3">
                Steps to Follow
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{tableRow}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
