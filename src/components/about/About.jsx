import "./About.css"; // Make sure to create a corresponding CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to Sales Flow</h1>
      <div className="about-section">
        <h2>Transforming Sales Dynamics with Smart Automation</h2>
        <p>
          Our innovative application is designed to revolutionize the way sales
          teams operate by automating key aspects of their workflow and
          providing deep insights into each client interaction.
        </p>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Real-Time Call Summaries</li>
          <li>Automated To-Do Creation</li>
          <li>Advanced Sales Analytics</li>
          <li>Client Data Management</li>
          <li>Project-Based Organization</li>
        </ul>
      </div>
      <div className="benefits-section">
        <h2>Benefits for Your Sales Team</h2>
        <ul>
          <li>Streamlined Operations</li>
          <li>Improved Accuracy and Efficiency</li>
          <li>Strategic Insights</li>
          <li>Enhanced Client Relationships</li>
        </ul>
      </div>
      <div className="audience-section">
        <h2>Who We Serve</h2>
        <p>
          Our solution is crafted for dynamic sales teams across industries.
          Whether you are part of a burgeoning startup or a well-established
          corporation, our application scales to meet your business requirements
          and elevates your sales processes to new heights.
        </p>
      </div>
    </div>
  );
};

export default About;
