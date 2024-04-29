import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our blockchain-based crowdfunding platform! Our goal is to revolutionize fundraising by connecting innovative projects with global investors through blockchain technology. Our platform ensures transparency, security, and global accessibility, empowering entrepreneurs to showcase their ideas and investors to support projects they believe in. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to empower entrepreneurs and creators worldwide by providing a cutting-edge blockchain-based crowdfunding platform. Through our innovative solutions, we aim to foster transparency, inclusivity, and trust in the fundraising process
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <ul className="list-disc pl-4">
              <li>Anupam Singh - CEO</li>
              <li>Manjeet Singh - CTO</li>
              <li>Monu Yadav - COO</li>
              <li>Viraj Sawant - HR</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For any inquiries or questions regarding our project, feel free to contact us at <a href="mailto:info@example.com">team_prof_jyoti_maam@gmail.com</a>.
          </p>
        </div>
        {/* Add more sections, content, and interactive elements as needed */}
      </div>
    </div>
  );
};

export default AboutUsPage;
