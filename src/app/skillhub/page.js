import Link from "next/link";
export default function SkillHub() {
    return (
      <div>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-blue-700">SkillHub</a>
            <nav className="space-x-6 hidden md:block">
              <Link href="/">
                <button>Go to Todo</button>
              </Link>
              <a href="#" className="text-gray-700 hover:text-blue-700">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">Courses</a>
              <a href="#" className="text-gray-700 hover:text-blue-700">Contact</a>
            </nav>
            <button className="md:hidden text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </header>
  
        <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('/images/hero-image.jpeg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Learn. Grow. Succeed.</h1>
            <p className="mt-4 text-lg md:text-xl">Unlock your potential with expert-led courses from SkillHub.</p>
            <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-md text-white font-semibold">Explore Courses</button>
          </div>
        </section>
  
       
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Featured Courses</h2>
            <p className="mt-4 text-gray-600">Explore our most popular and in-demand courses designed for your success.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
             
              {['Web Development Mastery', 'Data Science Essentials', 'Creative Design Basics'].map((course, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={`/images/course-${index + 1}.jpeg`} alt={course} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{course}</h3>
                    <p className="mt-2 text-gray-600">Dive into {course} and achieve your career goals.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
  
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} SkillHub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  