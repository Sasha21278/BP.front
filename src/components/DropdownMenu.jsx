import React from "react";

const DropdownMenu = () => {
    return (
        <div className="absolute bg-white shadow rounded p-2">
            <ul>
                <li className="py-1 px-2 hover:bg-gray-100">Option 1</li>
                <li className="py-1 px-2 hover:bg-gray-100">Option 2</li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
