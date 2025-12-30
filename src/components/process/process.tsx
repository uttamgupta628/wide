import  { useState } from 'react';

const OurProcess = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: "What type of process follow here ?" },
    { id: 2, question: "What type of process follow here ?" },
    { id: 3, question: "What type of process follow here ?" },
    { id: 4, question: "What type of process follow here ?" },
    { id: 5, question: "What type of process follow here ?" },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Yellow Header */}
      <div className="bg-yellow-400 h-1 w-full"></div>
      
      {/* Breadcrumb */}
      <div className="bg-[#3C3533] text-white text-sm py-4 tracking-wide w-full">
        <div className="px-6">
          <span className="text-gray-400">Home</span>
          <span className="mx-2">&gt;</span>
          <span>Process</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Process</h1>
          <p className="text-gray-600">The Process we follow to do our best</p>
        </div>

        {/* Process Cards Section - Image Placeholder */}
        <div className="bg-gray-100 rounded-2xl p-12 mb-16 min-h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            {/* This is where the process cards/image will go */}
            <div className="w-full max-w-2xl mx-auto">
              <p className="text-lg mb-4">Get an overview of our process</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Placeholder cards */}
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-300 transform -rotate-3">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-gray-500">Process Card 1</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-400 transform rotate-2">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-gray-500">Process Card 2</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-300 transform -rotate-2">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-gray-500">Process Card 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === faq.id ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-5 text-gray-600">
                    <p>
                      Here is the detailed answer to the question about our process. 
                      We follow a structured approach to ensure the best results for our clients.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Dots */}
      <div className="flex justify-center gap-2 py-8">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default OurProcess;