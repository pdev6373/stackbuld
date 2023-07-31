"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import { Images } from "@/constants";
import { ProjectType } from "@/types";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      id: 0,
      headingId: "panel1-heading",
      contentId: "panel1-content",
      image: Images.projectImageOne,
      title: "Boating",
      content:
        "Helping Cettakin build a simple engaging platform for users to explore fun activities around them.",
      isExpanded: "false",
      isHidden: "true",
    },

    {
      id: 1,
      headingId: "panel2-heading",
      contentId: "panel2-content",
      image: Images.projectImageOne,
      title: "Camping",
      content:
        "Helping Cettakin build a simple engaging platform for users to explore fun activities around them.",
      isExpanded: "false",
      isHidden: "true",
    },

    {
      id: 2,
      headingId: "panel3-heading",
      contentId: "panel3-content",
      image: Images.projectImageOne,
      title: "Camping",
      content:
        "Helping Cettakin build a simple engaging platform for users to explore fun activities around them.",
      isExpanded: "true",
      isHidden: "false",
    },

    {
      id: 3,
      headingId: "panel4-heading",
      contentId: "panel4-content",
      image: Images.projectImageOne,
      title: "Camping",
      content:
        "Helping Cettakin build a simple engaging platform for users to explore fun activities around them.",
      isExpanded: "false",
      isHidden: "true",
    },

    {
      id: 4,
      headingId: "panel5-heading",
      contentId: "panel5-content",
      image: Images.projectImageOne,
      title: "Camping",
      content:
        "Helping Cettakin build a simple engaging platform for users to explore fun activities around them.",
      isExpanded: "false",
      isHidden: "true",
    },
  ]);

  const accordionClickHandler = (project: ProjectType) => {
    const newProjects: ProjectType[] = projects.map((myProject) =>
      myProject.headingId === project.headingId
        ? {
            ...myProject,
            isExpanded: "true",
            isHidden: "false",
          }
        : {
            ...myProject,
            isExpanded: "false",
            isHidden: "true",
          }
    );

    setProjects(newProjects);
  };

  return (
    <section className={styles.projects}>
      <div className={styles.projectsHeader}>
        <div className={styles.projectsHeaderTexts}>
          <h3 className={styles.sectionTitle}>
            Featured Projects<span className={styles.dot}>.</span>
          </h3>
          <p className={styles.sectionBody}>
            The work we have done & the people we have helped
          </p>
        </div>

        <div className={styles.projectsNavigation}>
          <Image
            src={Images.arrowLeft}
            alt="arrow"
            width={32}
            height={32}
            className={styles.navigationIcon}
            onClick={() => {
              if (projects[0].isExpanded == "true") return;

              const currentProject = projects.find(
                (project) => project.isExpanded === "true"
              ) as ProjectType;

              const newProjects: ProjectType[] = projects.map((myProject) =>
                myProject.id === currentProject.id - 1
                  ? {
                      ...myProject,
                      isExpanded: "true",
                      isHidden: "false",
                    }
                  : {
                      ...myProject,
                      isExpanded: "false",
                      isHidden: "true",
                    }
              );

              setProjects(newProjects);
            }}
          />
          <Image
            src={Images.arrowRight}
            alt="arrow"
            width={32}
            height={32}
            className={styles.navigationIcon}
            onClick={() => {
              if (projects[projects.length - 1].isExpanded == "true") return;

              const currentProject = projects.find(
                (project) => project.isExpanded === "true"
              ) as ProjectType;

              const newProjects: ProjectType[] = projects.map((myProject) =>
                myProject.id === currentProject.id + 1
                  ? {
                      ...myProject,
                      isExpanded: "true",
                      isHidden: "false",
                    }
                  : {
                      ...myProject,
                      isExpanded: "false",
                      isHidden: "true",
                    }
              );

              setProjects(newProjects);
            }}
          />
        </div>
      </div>

      <div className={styles.accordion}>
        {projects.map((project) => (
          <div
            className={styles.accordionPanel}
            onClick={() => accordionClickHandler(project)}
          >
            {project.isExpanded === "true" ? (
              <div className={styles.overlay}></div>
            ) : (
              <div className={styles.overlayInactive}></div>
            )}

            <div
              className={styles.accordionContent}
              id={project.contentId}
              aria-hidden={project.isHidden}
              role="region"
            >
              <p className={styles.accordionChip}>Cettakin</p>

              <p className={styles.accordionContentHeader}>{project.content}</p>

              <p className={styles.accordionContentText}>
                Product design, Software development
              </p>

              <h2 id={project.headingId}>
                <button
                  className={styles.accordionTrigger}
                  aria-expanded={project.isExpanded}
                >
                  <span className={styles.accordionTriggerText}>
                    View Product
                  </span>
                  <Image
                    src={Images.learnMore}
                    alt="project image"
                    width={24}
                    height={24}
                  />
                </button>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
