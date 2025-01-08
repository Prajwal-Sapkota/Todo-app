import Tform from "./components/Tform";
import Tlist from "./components/Tlist";


const Home = () => {
    return(
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Todo App</h1>
                    <Tform/>
                    <Tlist/>
            </div>
        </div>
    );
};

export default Home;