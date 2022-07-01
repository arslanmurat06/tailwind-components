import React from "react";
import Quality from "./Quality";

const Main = () => {
  return (
    <main
      className="
    grid 
    gap-12 
    sm:gap-16 
    md:gap-24 
    lg:gap-32
    px-8
    overflow-hidden"
    >
      <a
        href="/"
        className="
        flex 
        gap-2 
        mx-auto 
        my-12
     
     shadow-xl 
     rounded-md 
     bg-amber-400 
     dark:text-neutral-900  
     px-6 py-2 hover:shadow-none 
     transition-shadow
       "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Download App</span>
      </a>

      <section aria-labelledby="qualities" className="relative">
        <h2 id="qualties" className="sr-only">
          Our Qualities
        </h2>
        <Quality
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
          text={"Our Products are secure and provate out-of-the-box"}
          title={"Safe"}
        />
        <Quality
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
          text={"Feel good about your wallet and the environment"}
          title={"Efficient"}
        />
        <Quality
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
          text={"Leading the smart home for 10 years"}
          title={"Proven"}
        />
      </section>
    </main>
  );
};

export default Main;
