import React from 'react';

const ImageContentSection = () => {
const sections = [
  {
    title: 'Growing business needs more than just an accounting software',
    description: `Most businesses use accounting software only for compliance. Modern businesses need real-time data and analytics to stay ahead of the competition. Traditional tools do not provide integrated solutions, forcing you to use excel sheets or multiple tools, which leads to duplication of work, waste of time, and resources.

An integrated solution like PTAC® allows you to manage all aspects of your business, saving time and money. With features tailored to meet the demands of growing businesses, PTAC® ensures streamlined operations and enhanced productivity.`,
    imageUrl: 'https://plus.unsplash.com/premium_vector-1682306289910-9495c81d48da?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Easy to use Business Management Software',
    description: `PTAC® has been designed using the latest technology with an intuitive user interface. It is clutter-free software with the right balance of simplicity and features.

The system is designed to get new users quickly started with very little training. Dashboards can be configured by each user to suit their preferences. Most widgets support drill-down to voucher level, enabling efficient data management.

Users can leverage shortcuts and advanced filters for quick data entry and report generation. With PTAC®, businesses can achieve operational excellence and drive growth through optimized workflows and comprehensive data insights.`,
    imageUrl: 'https://plus.unsplash.com/premium_vector-1682308535823-a9b519c2151c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: '24 x 7 access from any location',
    description: `PTAC® is a proven cloud-based business management solution that provides 24/7 access from any device connected to the internet. It supports remote access for field staff to check stocks, receivables, and book orders without contacting the office.

Multi-location setup? No problem. PTAC® ensures real-time data synchronization across all branches. Whether you're in the office or on the go, PTAC® empowers businesses with seamless accessibility and operational efficiency.`,
    imageUrl: 'https://plus.unsplash.com/premium_vector-1682303083549-2a69e2b96b05?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Business Analytics and reports',
    description: `In today's business environment, making informed decisions quickly is crucial. PTAC® provides business intelligence dashboards and analytics that offer insights into key performance metrics. Users can configure dashboards based on their roles and access privileges.

Stay ahead with customizable graphs, reports, and real-time alerts. PTAC® empowers businesses to monitor KPIs, track performance trends, and respond swiftly to market dynamics.`,
    imageUrl: 'https://plus.unsplash.com/premium_vector-1711987474646-9491260b0395?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

  return (
    <div className='p-4 mt-7'>
      <div className="image-content-sections">
        {sections.map((section, index) => (
          <div key={index} className={`image-content-section ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} md:flex cursor-pointer`}>
            <div className="image flex-1 mb-5 mt-5">
              <img src={section.imageUrl} alt="Content" className="w-full h-[350px] object-cover rounded-2xl hover:scale-95 duration-500" />
            </div>
            <div className="content flex-1 p-5 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-5 text-[#4FA9D7]">{section.title.toLocaleUpperCase()}</h2>
              <p className="mt-2 text-1xl text-justify text-black text-md ">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContentSection;
