import { Gift } from 'lucide-react';

const PromoCard = () => {
  return (
    <div className="mb-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-2 right-2 text-blue-200">
          <div className="text-sm opacity-75">Work better, together</div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Get 25% off</h3>
              <p className="text-lg mb-1">Acmesystems by</p>
              <p className="text-lg mb-4">Referring</p>
              
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                Band qilish
              </button>
            </div>
            
            <div className="relative ml-4">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 text-xs font-bold">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-12 w-2 h-2 bg-white bg-opacity-30 rounded-full"></div>
        <div className="absolute bottom-8 right-6 w-1 h-1 bg-white bg-opacity-40 rounded-full"></div>
      </div>
    </div>
  );
};

export default PromoCard;