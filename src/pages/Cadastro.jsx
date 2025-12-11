import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";

function Cadastro() {
    const date = new Date();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState([]);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:9099/api/user', dados);
            alert('Conta criada com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    }
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">

                <div className="flex flex-col bg-zinc-500 w-11/12 max-w-md rounded-lg border shadow-xl shadow-zinc-700 p-6 sm:p-8 mx-4">

                    <h2 className="font-bold text-center text-white text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">CADASTRO</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <label className="font-bold text-white self-start">Nome</label>

                        <input className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1" type="text" placeholder="João Silva..." onChange={(e) => setDados({ ...dados, nome: e.target.value })} required />

                        <label className="font-bold text-white self-start">Email</label>

                        <input className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1" type="email" placeholder="joao@email.com" onChange={(e) => setDados({ ...dados, email: e.target.value })} required />

                        <label className="font-bold text-white self-start">Senha</label>

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

                        <label className="font-bold text-white self-start">Data de Nascimento</label>

                        <input className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1 [&::-webkit-calendar-picker-indicator]:invert" min="1950-01-01" max={new Date().toISOString().split('T')[0]} type="date" onChange={(e) => setDados({ ...dados, data_nasc: e.target.value })} required />

                        <label className="font-bold text-white self-start">CPF</label>

                        <input className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1" type="text" placeholder="000.000.000-00" minLength="11" maxLength="14" onChange={(e) => setDados({ ...dados, cpf: e.target.value })} required />

                        <label className="font-bold text-white self-start">Saldo Inicial</label>

                        <input className="outline-none border-b-2 border-white bg-transparent text-white placeholder-gray-300 transition-all duration-300 focus:border-lime-600 w-full px-2 py-1" type="number" placeholder="R$ 0,00" step="0.01" min="0" onChange={(e) => setDados({ ...dados, saldo: e.target.value })} required />

                        <button className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" type="submit"
                        disabled={loading}>
                            {loading ? "Cadastrando..." : "Cadastrar"}
                        </button>

                    </form>

                    <div className="text-center p-8 sm:p-6">
                        <p>Já possui uma conta? <a href="/login" className="text-white hover:underline"> Faça login! </a></p>
                    </div>

                </div>

            </div>
        );
    }
export default Cadastro;