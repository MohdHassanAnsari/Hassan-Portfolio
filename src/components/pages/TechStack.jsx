import React from "react";
import { PythonSvgs } from "../svgs/LanguagesSvgs/PythonSvgs";
import { JavaScriptSvg } from "../svgs/LanguagesSvgs/JavaScriptSvg";
import { TypeScriptSvg } from "../svgs/LanguagesSvgs/TypeScriptSvg";
import { MongoDbSvg } from "../svgs/LanguagesSvgs/MongoDbSvg";
import { SqlSvgMy, SqlSvgPg } from "../svgs/LanguagesSvgs/SqlSvg";
import { CssSvg, HtmlSvg, TailwindSvg } from "../svgs/LanguagesSvgs/HtmlCssSvg";
import { GitHubSvg, GitSvg } from "../svgs/LanguagesSvgs/GitSvg";
import { DjangoSvg } from "../svgs/LanguagesSvgs/DjangoDrfSvg";
import { DockerSvg } from "../svgs/LanguagesSvgs/DockerSvg";
import { NodeSvg, ReactSvg } from "../svgs/LanguagesSvgs/ReactSvg";
import { AwsSvg } from "../svgs/LanguagesSvgs/AwsSvg";

export const TechStack = () => {
  return (
    <>
      <section className="text-black lg:mx-6 lg:my-6">
        <div className="container mx-auto lg:px-5 lg:py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-1 text-2xl font-medium text-white sm:text-3xl">
              TechStack
            </h1>

            <hr className="mx-auto my-1 mb-6 h-1 w-48 rounded border-0 bg-white dark:bg-green-700 md:my-3" />

            <div className="mx-auto text-base leading-relaxed lg:w-2/3">
              <button className="ml-3 inline-flex items-center rounded-lg bg-transparent hover:bg-zinc-800 focus:outline-none">
                <PythonSvgs />
                &nbsp;
                <JavaScriptSvg />
                &nbsp;
                <TypeScriptSvg />
                &nbsp;
              </button>
              <button className="ml-3 inline-flex items-center rounded-lg bg-transparent hover:bg-zinc-800 focus:outline-none">
                <MongoDbSvg />
                &nbsp;
                <SqlSvgMy />
                &nbsp;
                <SqlSvgPg />
                &nbsp;
              </button>
              <button className="ml-3 inline-flex items-center rounded-lg bg-transparent hover:bg-zinc-800 focus:outline-none">
                <HtmlSvg />
                &nbsp;
                <CssSvg />
                &nbsp;
                <TailwindSvg />
                &nbsp;
              </button>
              <button className="ml-3 inline-flex items-center rounded-lg bg-transparent hover:bg-zinc-800 focus:outline-none">
                <ReactSvg />
                &nbsp;&nbsp;
                <DjangoSvg />
                &nbsp;&nbsp;
                <NodeSvg />
                &nbsp;
              </button>
              <button className="ml-3 inline-flex items-center rounded-lg bg-transparent hover:bg-zinc-800 focus:outline-none">
                <GitSvg />
                <GitHubSvg />
                &nbsp;
                <DockerSvg />
                &nbsp;&nbsp;&nbsp;
                <AwsSvg />
                &nbsp;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
