import React from 'react';
import { Code, Rocket, Users, BookOpen, ChevronRight, MapPin, Menu } from 'lucide-react';

const features = [
  { icon: <Code size={24} />, title: 'Learn to Code', description: 'Master the latest web technologies' },
  { icon: <Rocket size={24} />, title: 'Launch Your Career', description: 'Build a portfolio that stands out' },
  { icon: <Users size={24} />, title: 'Join a Community', description: 'Connect with fellow developers' },
  { icon: <BookOpen size={24} />, title: 'Comprehensive Curriculum', description: 'From basics to advanced topics' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code size={32} className="text-indigo-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">CodeSpiral</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu size={24} className="text-gray-600" />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">Courses</a></li>
              <li><a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">About</a></li>
              <li><a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Unlock Your Web Development Potential</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">Join CodeSpiral and spiral your way to success in the world of web development</p>
          <a href="#" className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">Get Started</a>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Choose CodeSpiral?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="text-indigo-600 mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                <p className="text-indigo-100 mb-6">Join thousands of successful developers who have transformed their careers with CodeSpiral.</p>
                <a href="#" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 transition duration-300">
                  Enroll Now <ChevronRight size={20} className="ml-2" />
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Students coding" className="w-full h-64 md:h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <span className="text-xl sm:text-2xl font-bold">CodeSpiral</span>
              <p className="text-gray-400 mt-2">Empowering developers since 2023</p>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-indigo-400">Terms</a>
              <a href="#" className="hover:text-indigo-400">Privacy</a>
              <a href="#" className="hover:text-indigo-400">Contact</a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin size={24} className="text-indigo-400 mt-1" />
              <address className="text-gray-400 not-italic">
                123 Tech Street<br />
                San Francisco, CA 94105<br />
                United States
              </address>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2024 CodeSpiral. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;