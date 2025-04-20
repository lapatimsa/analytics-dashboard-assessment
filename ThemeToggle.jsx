const ThemeToggle = ({ toggleTheme, currentTheme }) => {
    return (
      <div className="mb-6">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            onChange={toggleTheme}
            checked={currentTheme === 'dark'}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600 relative">
            <div className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
              currentTheme === 'dark' ? 'translate-x-5' : ''
            }`}></div>
          </div>
          <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
        </label>
      </div>
    );
  };
  
  export default ThemeToggle;