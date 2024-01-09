import React from "react";

const About = () => {
  return (
    <div className=" m-4 p-4 w-9/12 flex">
      <div className="mx-10">
        <h1 className="text-2xl mb-10 font-bold">Name : Atharva Patil</h1>
        <p className="text-lg mb-10 font-medium">
          About Me : As a passionate and motivated front-end developer, I am
          eager to leverage my skills in HTML, CSS, JavaScript, React.js and
          Tailwind CSS to contribute to innovative and user-centric web
          development projects. With a solid foundation in front-end
          technologies and a keen eye for design, I am excited to apply my
          knowledge and learn new technologies in a dynamic and collaborative
          work environment. My goal is to contribute to creating seamless and
          visually appealing user experiences while continuously expanding my
          skill set and staying abreast of industry trends.
        </p>
        <p className="text-lg font-medium">Skills :</p>
        <ul className="flex">
          <li className="mr-5">
            <p className="mr-4 text-lg font-medium">HTML</p>
            <img
              className="w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png"
            />
          </li>
          <li className="mr-5">
            <p className="mr-4 ml-4 text-lg font-medium">CSS</p>
            <img
              className="w-14"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
            />
          </li>
          <li className="mr-5">
            <p className="mr-4 text-lg font-medium">JavaScript</p>
            <img
              className="w-14 ml-4 rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
            />
          </li>
          <li>
            <p className="mr-4 text-lg font-medium">React.js</p>
            <img
              className="w-14 rounded-lg"
              src="https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png"
            />
          </li>
          <li className="mr-5 ml-3">
            <p className="mr-4  mb-4 text-lg font-medium">Tailwind CSS</p>
            <img
              className="w-12 ml-5  "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
            />
          </li>
        </ul>
      </div>
      <div className="">
        <img
          className=" mx-44 rounded-lg"
          src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
