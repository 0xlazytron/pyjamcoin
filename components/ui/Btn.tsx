import React from "react";

interface BtnProps {
    text: string;
    style?: string;
    onClick?: () => void;
}

const Btn: React.FC<BtnProps> = ({ text, style, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-white border-purple-500 flex gap-2 items-center shadow-lg shadow-purple-500 border btnn py-4 px-8 rounded-full cursor-pointer ${style}`}
        >
            {text}
        </button>
    );
};

export default Btn;
