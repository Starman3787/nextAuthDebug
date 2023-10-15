function Button({ children }) {
    return (
        <div className="bg-violet-700 hover:bg-violet-800 text-white inline-block text-center px-4 py-4 text-[20px] mt-10 rounded-xl">
            {children}
        </div>
    );
}

export default Button;