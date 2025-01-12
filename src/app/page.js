import Tform from "./components/Tform";
import Tlist from "./components/Tlist";
import DarkMode from "./components/DarkMode";


const Home = () => {
    return(
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-500 to-pink-500 flex items-center justify-center dark:bg-gray-800">
            <div className="p-6 bg-background text-foreground dark:bg-gray-900 dark:text-white min-h-screen">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6 dark:text-gray-200">Todo App</h1>
                    <DarkMode/>
                    <Tform/>
                    <Tlist/>
            </div>
        </div>
    );
};

export default Home;