export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Personal Projects',
    deliverable: [
      'Built and deployed multiple full-stack applications using React, Next.js, Node.js, and MongoDB.',
      'Created a job portal app with filters, Clerk authentication, and a modern UI.',
      'Built a Krishna AI chatbot offering spiritual guidance using custom backend APIs.',
      'Developed a password manager app to securely store credentials locally.',
    ],
    fromDate: '2024-01',
    toDate: 'Present',
  },
  {
    company: 'Open Source & GitHub Contributions',
    deliverable: [
      'Maintaining a public repository for Striver’s DSA sheet with daily solved problems.',
      'Shared reusable UI components and project boilerplates for beginner developers.',
    ],
    fromDate: '2025-07',
    toDate: 'Present',
  }
]
