'use client'
import { useEffect } from 'react'

export const Redirects = () => {
  useEffect(() => {
    const { pathname, hash } = window.location
    if (
      pathname === '/reference/main-user-interface' &&
      hash === '#user-data-directory'
    ) {
      window.location.href = '/reference/user-data-directory'
    }
  }, [])
  return null
}
