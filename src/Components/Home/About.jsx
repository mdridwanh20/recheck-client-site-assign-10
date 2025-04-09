import React from 'react';

export default function About() {
  return (
    <div className="pt-16 container  m-auto px-3">

      <div className="text-center  pb-10">
        <h1 className="uppercase ">About Us</h1>
        <p className="font-bold text-xl ">Your Partner in Sports Excellence</p>
      </div>

      <div className="text-gray-500 space-y-6">
        <p className="text-lg">
          Welcome to <span className="font-semibold ">EquiSports</span>, your ultimate destination for premium sports equipment and apparel.
          Our mission is to empower athletes, fitness enthusiasts, and sports lovers with high-quality accessories that elevate performance and inspire excellence.
        </p>
        <p className="text-lg">
          At EquiSports, we understand that every sport has unique demands. That's why our carefully curated collection caters to a diverse range of sports disciplines,
          ensuring that you find the perfect gear to suit your needs. Whether you're on the court, field, track, or in the gym, our products are designed to enhance
          your experience and help you achieve your goals.
        </p>
        <p className="text-lg">
          Our platform goes beyond just shopping. We offer a seamless, user-friendly experience with features like:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Responsive Design:</span> Access EquiSports anytime, anywhere, on any device.</li>
          <li><span className="font-semibold">Customer Reviews:</span> Make informed decisions with the insights of our sports community.</li>
          <li><span className="font-semibold">Secure User Accounts:</span> Enjoy a personalized shopping experience with safe and easy authentication.</li>
          <li><span className="font-semibold">Efficient Product Management:</span> Explore, compare, and manage your purchases effortlessly.</li>
        </ul>
        <p className="text-lg">
          Join the <span className="font-semibold ">EquiSports family</span> and gear up for greatness.
          Let us be your trusted partner in your journey to peak performance.
        </p>
      </div>
    </div>
  );
}
