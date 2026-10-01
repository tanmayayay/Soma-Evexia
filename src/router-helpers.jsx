import { useEffect } from 'react'
import { HashRouter as Router, Routes as RRoutes, Route as RRoute, useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export const HashRouter = Router
export const Routes = RRoutes
export const Route = RRoute
