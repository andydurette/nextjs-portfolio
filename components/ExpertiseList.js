"use client";
import AnimateBlock from "./AnimateBlock";
import Image from "next/image";
import { expertiseAtom } from "../jotai/index";
import { useAtomValue } from "jotai";

const ExpertiseList = () => {
  let expertise = useAtomValue(expertiseAtom);

  const delayCount = (i, index) => {
    let expertiseDelay = 0;

    for (let ind = 0; ind <= i; ind++) {
      expertiseDelay += expertise[ind].skills.length * 75;
    }

    if (index !== 0) {
      expertiseDelay += index * 75;
    }

    return expertiseDelay;
  };

  return (
    <section id="expertise">
      <div id="expertise-grid">
        <h2>EXPERTISE</h2>
        {expertise.map((expertiseVal, i) => (
          <div key={expertiseVal.id} className="expertise-piece">
            <div>
              <Image
                src={expertiseVal.icon}
                alt={expertiseVal.alt}
                width={50}
                height={50}
                loading="lazy"
              />
            </div>
            <h3>{expertiseVal.heading}</h3>
            <p>{expertiseVal.copy}</p>
            <p className="skillset-heading">SKILL SET</p>
            <div className="expertise-icons">
              {expertiseVal.skills.map((skill, index) => (
                <div className="tooltip" key={index}>
                  <AnimateBlock
                    keyValue={index}
                    fadeDelay={() => delayCount(i, index)}
                    skill={skill[0]}
                    src={skill[1]}
                    alt={skill[2]}
                    toolTipText={skill[2]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseList;
