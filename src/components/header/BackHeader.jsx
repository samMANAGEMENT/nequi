import React from 'react';

const BackHeader = () => {
    return (
        <div className="px-4 py-2 w-full">
            <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-4 h-4 text-[#6c6c6c]" role="button" tabIndex="0">
                    <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.9375,8.0005l3.5313,-3.532c0.1354,-0.135 0.2031,-0.291 0.2031,-0.468c0,-0.178 -0.0677,-0.334 -0.2031,-0.469c-0.1355,-0.136 -0.2917,-0.203 -0.4688,-0.203c-0.1771,0 -0.3333,0.067 -0.4688,0.203l-4,4c-0.1354,0.135 -0.2031,0.291 -0.2031,0.469c0,0.177 0.0677,0.333 0.2031,0.468l4,4c0.073,0.063 0.1537,0.112 0.2422,0.149c0.0886,0.036 0.1641,0.054 0.2266,0.054c0.0625,0 0.138,-0.018 0.2266,-0.054c0.0885,-0.037 0.1692,-0.086 0.2422,-0.149c0.1354,-0.135 0.2031,-0.291 0.2031,-0.468c0,-0.178 -0.0677,-0.334 -0.2031,-0.469z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <p className="text-sm text-[#6c6c6c] font-normal leading-4">
                    Regresar
                </p>
            </div>
        </div>
    );
};

export default BackHeader;
