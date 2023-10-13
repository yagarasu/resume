import type { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import ResumeRoute from './routes/ResumeRoute/ResumeRoute'
import ProjectsRoute from './routes/ProjectsRoute/ProjectsRoute'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ResumeRoute />} />
      <Route path="/projects" element={<ProjectsRoute />} />
    </Routes>
  )
}

export default AppRouter