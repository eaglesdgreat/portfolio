import { FC } from "react"
import email from 'assets/email.png';

// TYPES
export type TWorkTag = string

export interface TWorkExperience {
  name: string
  company: string
  desc: string
}

// INTERFACES
export interface IImagesProps {
  email: string
  mobile: string
  api: string
  cpp: string
  css: string
  figma: string
  flutter: string
  git: string
  graphql: string
  html: string
  javascript: string
  mu5: string
  node: string
  python: string
  react: string
  redux: string
  sass: string
  typescript: string
  vue: string
  about01: string
  about02: string
  about03: string
  about04: string
  profile: string
  circle: string
  logo: string
  adidas: string
  amazon: string
  asus: string
  bolt: string
  nb: string
  skype: string
  spotify: string
}

export interface IAboutProps {
  title: string
  imageUrl: string
  description: string
}

export interface INavigationDotsProps {
  active: string
}

export interface IAppWrapperProps {
  Component: FC<any>
  idName: string
  classNames?: string
}

export interface IWorkAnimationProps {
  y: number
  opacity: number
}

export interface IWorkProps {
  title: string
  description: string
  projectLink: string
  codeLink: string
  imgUrl: string
  tags: TWorkTag[]
}

export interface ISkillProps {
  name: string
  bgColor: string
  icon: string
}

export interface IExperienceProps {
  year: string
  works: TWorkExperience[]
}

export interface IBrandProps {
  _id: string
  name: string
  imgUrl: string
}

export interface ITestimonialProps {
  name: string
  company: string
  imageUrl: string
  feedback: string
}

export interface IFooterFormData {
  name: string
  email: string
  message: string
}
