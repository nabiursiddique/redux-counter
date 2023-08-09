const Button = ({ children }) => {
    return (
        <button className="text-xl bg-blue-400 mx-5 px-5 py-3 text-white rounded hover:bg-blue-600 shadow-lg">{children}</button>
    );
};

export default Button;