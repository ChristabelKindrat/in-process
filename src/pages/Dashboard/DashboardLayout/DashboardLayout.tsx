import { FC } from 'react'

// styles
import cn from 'classnames'
import css from './dashboard-layout.module.scss'

// router-dom
import { Outlet } from 'react-router-dom'

// components
import { SideBar } from '../../../components'

const DashboardLayout: FC = () => {
  return (
    <main className={cn(css.dashboard)}>
      <div className={cn(css['dashboard-page'])}>
        <Outlet />
      </div>
      <SideBar />
    </main>
  )
}

export { DashboardLayout }