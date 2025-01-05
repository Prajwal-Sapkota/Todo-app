import Tform from "./components/Tform";
import Tlist from "./components/Tlist";

const Home = () => {
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Todo App</h1>
                    <Tform/>
                    <Tlist/>
            </div>
        </div>
    );
};

export default Home;