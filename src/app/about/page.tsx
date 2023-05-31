import React from "react";
import LearnFrom from "./LearnFrom";

const AboutPage = () => {
  return (
    <div className="max-w-[90vw] mx-auto">
      <h1 className="text-amber-700 text-2xl mb-2">About</h1>
      <div className="flex flex-col gap-5 mb-12">
        <p>
          Totam aut ipsam facere? Hic nemo itaque incidunt error consequuntur,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          ducimus sit doloremque nostrum sequi cumque expedita quis recusandae
          consequuntur, dicta placeat suscipit vero qui, non rem atque eligendi
          nisi tempore fugiat voluptas ut eos. Cupiditate modi dicta quae ipsam
          temporibus libero cum dolorum delectus pariatur.
        </p>
        <p>
          fugiat nemo ut laborum nobis tempore voluptatum ipsum perspiciatis
          iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          aut ipsam facere? Hic nemo itaque incidunt error consequuntur, iste
          obcaecati.
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
          numquam ipsa aut ab. Ex voluptatibus tempora atque modi voluptate nemo
          repudiandae iure distinctio libero perferendis dolorum error sequi
          cumque expedita quis recusandae consequuntur, dicta placeat suscipit
          vero qui, non rem atque eligendi nisi tempore fugiat voluptas ut eos.
          Cupiditate modi dicta quae ipsam temporibus libero cum dolorum
          delectus pariatur. dolores praesentium ipsum deserunt at impedit
          asperiores laborum! Inventore neque impedit atque, fugiat nemo ut
          laborum nobis tempore voluptatum ipsum perspiciatis iste.
        </p>
        <hr />
      </div>
      <LearnFrom />
    </div>
  );
};

export default AboutPage;
