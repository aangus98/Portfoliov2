// techIcons.tsx
import {
  SiTypescript,
  SiVite,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiApollographql,
  SiCypress,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbFileTypeCss } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { IoLogoGitlab } from "react-icons/io5";
import "./css/tools.css";

export type TechGroup = "frontEnd" | "backEnd" | "devTools";

export const techIcons = {
  frontEnd: [
    <SiJavascript key="js" size={50} title="JavaScript" />,
    <SiTypescript key="ts" size={50} title="TypeScript" />,
    <BsBootstrap key="bs" size={50} title="Bootstrap" />,
    <TbFileTypeCss key="css" size={50} title="CSS" />,
    <MdHtml key="html" size={50} title="HTML" />,
    <FaReact key="react" size={50} title="React" />,
    <FaPython key="python" size={50} title="Python" />,
  ],
  backEnd: [
    <FaNodeJs key="node" size={50} title="Node.js" />,
    <SiExpress key="express" size={50} title="Express" />,
    <SiMongodb key="mongo" size={50} title="MongoDB" />,
    <BiLogoPostgresql key="pg" size={50} title="PostgreSQL" />,
    <SiApollographql key="apollo" size={50} title="Apollo" />,
    <SiCypress key="cypress" size={50} title="Cypress" />,
  ],
  devTools: [
    <VscVscode key="vscode" size={50} title="VS Code" />,
    <FaGithub key="github" size={50} title="GitHub" />,
    <IoLogoGitlab key="gitlab" size={50} title="GitLab" />,
    <SiVite key="vite" size={50} title="Vite" />,
  ],
};
