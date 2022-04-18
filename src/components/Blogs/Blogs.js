import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>blogs</h1>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='w-75'> answer:
                Firebase provides lot of facilities. In our project we are using it for authentication. But it also provides many other facilities. Firebase it widely used, so it has a big community. It also provides us the advantage of hosting our website and if want it gives us google analytics service.
                <br>
                </br>
                There are some alternative to firebase like :
                <ul>
                    <li>

                        Back4app

                    </li>

                    <li>Parse</li>
                    <li>Kinvey</li>
                    <li>Heroku</li>
                </ul>
            </p>




            <h2> What other services does firebase provide other than authentication</h2>

            <p>

                Firebase provides us lot of facilites other than authentication. They are given below:
                <ul>

                    <li>
                        Secured hosting
                    </li>

                    <li>
                        Google analytics
                    </li>

                    <li>
                        Fast  hosting
                    </li>

                    <li>
                        Database service


                    </li>

                    <li>
                        Use of firebase dynamic links
                    </li>
                </ul>

            </p>
        </div>
    );
};

export default Blogs;