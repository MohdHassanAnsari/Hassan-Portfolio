import React from "react";
import { Images } from "../svgs/images";

export const TechStack = () => {
  // ? For the Svg Styling
  const imageStyles = {
    backgroundColor: "transparent",
    width: "50px",
    height: "50px",
    marginRight: "10px",
  };

  return (
    <>
      <section className="text-black lg:mx-6 lg:my-6">
        <div className="container mx-auto lg:px-5 lg:py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-1 text-2xl font-medium text-white  sm:text-3xl">
              TechStack
            </h1>

            <hr className="mx-auto my-1 mb-6 h-1 w-48 rounded border-0 bg-white dark:bg-green-700 md:my-3" />

            <div className="mx-auto flex flex-wrap justify-center ">
              <Images.JavaScript
                style={{
                  ...imageStyles,
                  paddingTop: "5px",
                }}
              />
              <Images.TypeScript
                style={{
                  ...imageStyles,
                  paddingTop: "5px",
                }}
              />
              <Images.ReactJs
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Tailwind
                style={{
                  ...imageStyles,
                }}
              />
              <Images.HTML5
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Css3
                style={{
                  ...imageStyles,
                  paddingTop: "5px",
                }}
              />
              <Images.Bootstrap
                style={{
                  ...imageStyles,
                  paddingTop: "5px",
                }}
              />
              <Images.Python
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Django
                style={{
                  ...imageStyles,
                }}
              />
              <Images.NodeJs
                style={{
                  ...imageStyles,
                }}
              />
              <Images.MongoDB
                style={{
                  ...imageStyles,
                }}
              />
              <Images.MySQL
                style={{
                  ...imageStyles,
                }}
              />
              <Images.PostgreSQl
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Redis
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Aws
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Docker
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Kubernetes
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Kafka
                style={{
                  ...imageStyles,
                }}
              />
              <Images.Git
                style={{
                  ...imageStyles,
                }}
              />
              <Images.GitHub
                style={{
                  ...imageStyles,
                }}
              />
              <Images.GitLab
                style={{
                  ...imageStyles,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
