import React from "react";

export const Pageno = (props) => {
    return (
        <div>
            <li>
                <a
                    href="/"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700  border border-gray-300 hover:bg-gray-100 hover:text-blue-700 "
                >
                {props.number}
                </a>
            </li>
        </div>
    );
};


