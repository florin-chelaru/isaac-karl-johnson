import React, { createContext, useContext } from 'react'
import { User } from '../util/User'

const UserContext = createContext<{ user: User | null } | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const user: User | null = null

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
