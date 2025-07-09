
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-2">StudyBuddy</h3>
            <p className="text-sm text-gray-400">
              Connecting college students with peer mentors for academic success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Platform</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Find Helpers</a></li>
              <li><a href="#" className="hover:text-white">Become Helper</a></li>
              <li><a href="#" className="hover:text-white">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Safety</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 StudyBuddy. Made by students, for students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
