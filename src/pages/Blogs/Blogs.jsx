import React from 'react';
//helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Blogs = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>BricksUniverse | Blogs</title>
            </Helmet>
            <div>
                <div className='mt-14 my-container mb-10 px-5 lg:px-0'>
                    {/* q.1 */}
                    <div className='bg-[#D9D9D9] p-5 rounded'>
                        <h3 className='text-xl font-semibold'>Q.1 What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <div className='ml-3 mt-3'>
                            <p >Access tokens and refresh tokens are two types of tokens used in OAuth 2.0 to grant access to protected resources. They are both generated by an authorization server and are used to authenticate users and grant access to protected resources. However, they have different roles and lifetimes. Access tokens are used to make authenticated requests to a resource server, while refresh tokens are used to request new access tokens. Access tokens are typically short-lived, while refresh tokens are typically long-lived.
                            </p>

                        </div>
                    </div>

                    {/* q.2 */}
                    <div className='bg-[#D9D9D9] p-5 mt-8 rounded'>
                        <h3 className='text-xl font-semibold'>Q.2 Compare SQL and NoSQL databases?</h3>
                        <div className='ml-3 mt-3'>
                            <p>SQL databases are relational databases that use structured query language (SQL) to store and retrieve data. SQL is a declarative language, which means that you specify what you want to do with the data, not how to do it. SQL databases are typically used for applications that require a lot of data analysis and reporting.
                                <br />
                                <br />
                                NoSQL databases are non-relational databases that use different data models to store and retrieve data. Some common NoSQL data models include key-value pairs, document databases, and graph databases. NoSQL databases are typically used for applications that require a lot of flexibility and scalability.</p>

                        </div>
                    </div>
                    {/* q.3 */}
                    <div className='bg-[#D9D9D9] p-5 mt-8 rounded'>
                        <h3 className='text-xl font-semibold'>Q.3 What is express js? What is Nest JS ?</h3>
                        <div className='ml-3 mt-3'>
                            <p>Express.js is a minimalist framework that provides a small set of features. It is easy to learn and use, and it provides a good balance of flexibility and power. Express.js is a popular choice for building small and simple web applications.
                                <br />
                                <br />
                                Nest.js is a more opinionated framework that provides a larger set of features and a more structured development experience. Nest.js is a good choice for building larger and more complex web applications. It provides a more structured development experience, and it includes a number of features that can help to improve the performance and security of your application.
                            </p>
                        </div>
                    </div>

                    {/* q.4 */}
                    <div className='bg-[#D9D9D9] p-5 mt-8 rounded'>
                        <h3 className='text-xl font-semibold'>Q.4 What is MongoDB aggregate and how does it work ?</h3>
                        <div className='ml-3 mt-3'>
                            <p>MongoDB aggregation is a process of transforming data into a more meaningful and useful form. It is used to perform complex operations on data, such as grouping, sorting, and summarizing. MongoDB aggregation is based on the concept of pipelines, which are a series of stages that are applied to the data to produce the desired output.</p>
                            <p>Each stage in a pipeline performs a specific operation on the data. Some common stages include:</p>
                           <br />
                            <ul className='ml-8 list-disc'>
                                
                                <li className=''>$match: This stage is used to filter the data based on a certain criteria.</li>
                                <li>$group: This stage is used to group the data based on a certain criteria and calculate summary statistics.</li>
                                <li>$sort: This stage is used to sort the data in a certain order.</li>
                                <li>$project: This stage is used to project the data into a new format.</li>
                            </ul>
                            <br />
                            <p>The stages in a pipeline are executed in sequence, and the output of each stage is passed to the next stage. The final output of the pipeline is the desired result.</p>
                        </div>
                    </div>



                </div >
            </div>
        </HelmetProvider>
    );
};

export default Blogs;