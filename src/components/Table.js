import React from "react";
import { MdDelete, MdEditDocument } from "react-icons/md";

const Table = ({ headers, data, onEdit, onDelete }) => {
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {data?.length > 0 ? (
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  {Object.keys(item).map((key) => {
                    if (key !== "id") {
                      return (
                        <td key={key} className="px-6 py-4">
                          {item[key]}
                        </td>
                      );
                    }
                  })}
                  <td className="px-6 py-4 flex space-x-2">
                    <MdEditDocument
                      className="text-blue-500 cursor-pointer text-xl hover:text-blue-700"
                      onClick={() => onEdit(item.id)}
                    />
                    <MdDelete
                      className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                      onClick={() => onDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={headers.length} className="text-center p-6">
                  <div className="text-gray-500 dark:text-gray-400 text-base">
                    No Data Found
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
