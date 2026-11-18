import type { FC } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faFileInvoice,
  faHammer,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import ExperienceSection from "./components/ExperienceSection";
import { experience } from "../../data/experience";
import SkillsSection from "./components/SkillsSection";
import Title from "../../components/Title";
import { softSkills, techSkills } from "../../data/skills";
import LanguagesSection from "./components/LanguagesSection";
import { languages } from "../../data/languages";
import ConferencesSection from "./components/ConferencesSection";
import { conferences } from "../../data/conferences";
import CertificationsSection from "./components/CertificationsSection";
import { certifications } from "../../data/certifications";
import ProjectsSection from "./components/ProjectsSection";
import { projects } from "../../data/projects";
import EducationSection from "./components/EducationSection";
import { education } from "../../data/education";
import DownloadResumeButton from "./components/DownloadResumeButton";
import styles from "./ResumeRoute.module.scss";

export type ResumeRouteProps = {};

const ResumeRoute: FC<ResumeRouteProps> = () => {
  const hndDownloadClick = () => {
    window.print();
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Summary}>
          <Title icon={faFileInvoice} title="Summary" />
          <p>
            Senior Software Engineer with <strong>15+ years</strong> building
            large-scale web applications, currently inside an AI-native product
            organization working in a{" "}
            <strong>fully agentic development workflow</strong> (Cursor, Claude
            Code, custom agent harness) that ships to production hourly.
            Hands-on experience taking a product's <strong>AI agent</strong> to
            production — <strong>MCP tooling</strong>, skill authoring and
            prompt optimization — on top of deep{" "}
            <strong>React, TypeScript and Node.js</strong> engineering across
            real-time, high-traffic systems.
          </p>
        </div>
        {/* <div className={styles.SocialMedia}>
          <a href="https://github.com/yagarasu" target="_blank" rel="noreferer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/alexyshegmann" target="_blank" rel="noreferer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> */}
        <hr className={styles.HDivider} />
        <div className={styles.Experience}>
          <ExperienceSection items={experience} />
        </div>
        <div className={styles.Sidebar}>
          <div className={styles.SidebarGroup}>
            <SkillsSection
              title="Skills"
              icon={faHammer}
              skillGroup={techSkills}
            />
            <CertificationsSection certifications={certifications} />
            <SkillsSection
              title="Soft Skills"
              icon={faHandsHelping}
              skillGroup={softSkills}
            />
          </div>
          <div className={styles.SidebarGroup}>
            <LanguagesSection languages={languages} />
            <EducationSection education={education} />
            <ConferencesSection conferences={conferences} />
          </div>
        </div>
        <div className={styles.Projects}>
          <ProjectsSection projects={projects} />
        </div>
      </div>
      <DownloadResumeButton onClick={hndDownloadClick} />
    </>
  );
};

export default ResumeRoute;
