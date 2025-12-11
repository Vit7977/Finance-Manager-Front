import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { IoEye, IoEyeOff } from "react-icons/io5";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState([])

    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

     const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try{
            await axios.post('http://localhost:9099/api/user/login', dados);
            alert('Logado(a) com sucesso!');
            navigate('/');
        }catch(error){
            alert('Erro de login: ' + (error.response?.data?.message || error.message));
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 p-4">

            <div className="flex flex-col bg-zinc-500 w-full max-w-md rounded-lg border shadow-xl shadow-zinc-700 p-6 sm:p-8">
                <h2 className="font-bold text-center text-white text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
                    LOGIN
                </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">

                    <label className="font-bold text-white self-start">Email</label>
                    <input
                        className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1"
                        type="email"
                        placeholder="meuemail@exemplo.com"
                        onChange={(e) => setDados({ ...dados, email: e.target.value })}
                        required
                        />

                    <label className="font-bold text-white self-start mt-2">Senha</label>
                    <div className="relative w-full">
                        <input 
                            minLength="6"
                            className="outline-none border-b-2 border-white bg-transparent text-white transition-all duration-300 focus:border-lime-600 w-full px-2 py-1 pr-10"
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            onChange={(e) => setDados({ ...dados, senha: e.target.value })}
                            required
                            />
                        <button
                            onClick={togglePassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
                            type="button"
                            >
                            {showPassword ? (
                                <IoEyeOff className="text-2xl" />
                            ) : (
                                <IoEye className="text-2xl" />
                            )}
                        </button>
                    </div>

                        <button className="bg-white font-bold mt-6 p-3 w-full transition-all duration-300 rounded-lg hover:scale-105 hover:bg-lime-600 hover:text-white cursor-pointer" type="submit">
                        {loading ? "Fazendo login..." : "Login"}
                        </button>
                    </form>

                    <div className="text-center p-8 sm:p-6">
                        <p>Não possui uma conta? <a href="/cadastro" className="text-white hover:underline"> Cadastre-se </a></p>
                    </div>
                </div>
            </div>
    );
}

export default Login;