import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 p-4">
            <div className="flex flex-col bg-zinc-500 w-full max-w-md rounded-lg border shadow-xl shadow-zinc-700 p-6 sm:p-8">
                <h2 className="font-bold text-center text-white text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
                    LOGIN
                </h2>

                <div className="flex flex-col items-center gap-4 w-full">
                    <label className="font-bold text-white self-start">Email</label>
                    <input
                        className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1"
                        type="email"
                        placeholder="joao@exemplo.com"
                    />

                    <label className="font-bold text-white self-start mt-2">Senha</label>
                    <div className="relative w-full">
                        <input
                            className="outline-none border-b-2 border-white bg-transparent text-white transition-all duration-300 focus:border-lime-600 w-full px-2 py-1 pr-10"
                            type={showPassword ? "text" : "password"}
                        />
                        <button
                            onClick={togglePassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-800 transition-colors duration-300 focus:outline-none"
                            type="button"
                        >
                            {showPassword ? (
                                <IoEyeOff className="text-2xl" />
                            ) : (
                                <IoEye className="text-2xl" />
                            )}
                        </button>
                    </div>

                    <button className="bg-white font-bold mt-6 p-3 w-full transition-all duration-300 rounded-lg hover:scale-105 hover:bg-lime-600 hover:text-white cursor-pointer">
                        Logar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;