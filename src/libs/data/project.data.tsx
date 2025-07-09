export type Projects = {
  title: string
  description: string
  href: string
}

export const projectsData: Projects[] = [
  {
    title: 'Job Portal App',
    description:
      'A full-stack job listing platform with filters, Clerk authentication, and job posting functionality. Built using React, Express, and MongoDB.',
    href: 'https://hirely-job-portal-5pfj.onrender.com/', // Replace with live or GitHub link
  },
  {
    title: 'Krishna AI Chatbot',
    description:
      'An AI chatbot inspired by Lord Krishna and the Mahabharata, offering interactive spiritual guidance. Built with React and a custom Node.js backend.',
    href: 'https://krisna-ai-frontend.vercel.app/', // Replace with live or GitHub link
  },
]
