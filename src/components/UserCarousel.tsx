
const UserCarousel = () => {
  const users = [
    { name: 'Uchrashuv kafesi', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Uchrashuv kafesi', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Uchrashuv kafesi', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Uchrashuv kafesi', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="py-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {users.map((user, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2 mx-auto border-3 border-gray-200 hover:border-blue-400 transition-colors duration-200">
              <img 
                src={user.image} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-700 max-w-[80px] truncate">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCarousel;