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
  
        <section className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/images/hero-image.jpeg')" }}>
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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Popular Course Packages</h2>
            <p className="mt-4 text-gray-600 text-center">
                Take the next step in your career with our expert-curated courses.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {[
                {
                    name: "Full-Stack Web Development",
                    image: "/images/web.jpeg",
                    price: "$499",
                    duration: "12 Weeks",
                    description: "Master both front-end and back-end development in this comprehensive course.",
                },
                {
                    name: "Data Science Bootcamp",
                    image: "/images/datascience.jpeg",
                    price: "$599",
                    duration: "10 Weeks",
                    description: "Learn Python, machine learning, and data visualization from the ground up.",
                },
                {
                    name: "UI/UX Design Essentials",
                    image: "/images/uiux.jpeg",
                    price: "$399",
                    duration: "8 Weeks",
                    description: "Become a skilled designer and create the stunning interface experiences for the users.",
                }
                ].map((course, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                    <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-blue-700 font-bold">{course.price}</p>
                        <p className="text-gray-500">{course.duration}</p>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md">
                        Enroll Now
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
  

        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
            <p className="mt-4 text-gray-600">Hear from those who have transformed their lives with us.</p>
            <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Emily', 'Chris', 'Jordan'].map((name, index) => (
                <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-md">
                  <p className="text-gray-600">"SkillHub provided me with the tools and confidence I needed to succeed."</p>
                  <h4 className="mt-4 text-gray-800 font-bold">- {name}</h4>
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
  