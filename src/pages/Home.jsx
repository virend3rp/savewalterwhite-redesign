import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import walter1 from '/walter.jpeg';
import walter2 from '/walter2.jpg';
import walter3 from '/walter3.jpg'; // Add these images to your public/src folder

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText =
    'Walter White is a father, husband, and chemistry teacher — and he needs our help.';

  const navigate = useNavigate();

useEffect(() => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < fullText.length) {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, 25);
  return () => clearInterval(timer);
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{typedText}</h1>

        {/* Image Gallery */}
        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {[walter1, walter2, walter3].map((img, index) => (
            <div
              key={index}
              className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition"
            >
              <img src={img} alt={`Walter ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          After a recent diagnosis of advanced lung cancer, Walter is fighting not just for his life — but for the future of his family. Your support can make a real difference.
        </p>
      </div>

      {/* About Walter */}
      <div className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Who is Walter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Walter White has spent his life as a high school chemistry teacher, a devoted husband to Skyler, and a loving father to Walt Jr. He’s passionate about science, fiercely protective of his family, and admired by students and colleagues alike.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unfortunately, life took an unexpected turn when he was diagnosed with inoperable lung cancer. With mounting medical bills and limited insurance coverage, Walter and his family are struggling to stay afloat. Your donation helps provide treatment, support, and peace of mind during this difficult time.
          </p>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-green-100 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Why Your Help Matters</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Walter's treatment costs exceed $90,000 and continue to rise.</li>
            <li>Your donation supports medication, therapy, and in-home care.</li>
            <li>Every dollar helps secure a future for Walt Jr. and his education.</li>
            <li>All donations are tracked transparently and used for verified needs.</li>
          </ul>
        </div>
      </div>

      {/* Donate CTA */}
      <div className="py-12 bg-white border-t border-gray-300 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Every donation counts. Stand with Walter today.
          </h2>
          <button
            onClick={() => navigate('/donate')}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
