import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  const isClickable = project.url && project.url.trim() !== "";
  console.log("Project URL:", project.url, "isClickable:", isClickable);

  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: isClickable ? "pointer" : "default",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: isClickable ? `${theme.imageDark} 0 2px 15px` : undefined,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={
            isClickable ? () => openRepoinNewTab(project.url) : undefined
          }
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : -1}
          onKeyDown={
            isClickable
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ")
                    openRepoinNewTab(project.url);
                }
              : undefined
          }
          aria-disabled={!isClickable}
          style={{
            backgroundColor: theme.projectCard,
            cursor: isClickable ? "pointer" : "default",
          }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
