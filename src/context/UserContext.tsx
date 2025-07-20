import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// Typy TypeScript
interface User {
  id: string
  email: string
  name: string
  status: 'logged' | 'guest'
  createdAt: Date
}

interface UserContextType {
  user: User | null
  isLoggedIn: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

interface UserProviderProps {
  children: ReactNode
}

// Klucze dla localStorage
const STORAGE_KEYS = {
  USER: 'userData',
  AUTH_STATUS: 'authStatus'
}

// Funkcje do zarządzania localStorage
const setCache = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Błąd zapisu do cache:', error)
  }
}

const getCache = (key: string): any => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error('Błąd odczytu z cache:', error)
    return null
  }
}

const removeCache = (key: string): void => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Błąd usuwania z cache:', error)
  }
}

// Utworzenie kontekstu
const UserContext = createContext<UserContextType | undefined>(undefined)

// Hook do używania kontekstu
export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

// Provider komponent
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Sprawdzenie czy użytkownik jest zalogowany przy starcie aplikacji
  useEffect(() => {
    const savedUser = getCache(STORAGE_KEYS.USER)
    const savedStatus = getCache(STORAGE_KEYS.AUTH_STATUS)
    
    if (savedUser && savedStatus === 'logged') {
      // Konwersja daty z stringa z powrotem na Date
      const userData: User = {
        ...savedUser,
        createdAt: new Date(savedUser.createdAt)
      }
      setUser(userData)
    }
    setIsLoading(false)
  }, [])

  // Funkcja logowania
  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true)
      
      // Tutaj byłaby prawdziwa logika logowania z API
      const response = await simulateApiCall(email, password)
      
      if (response.success) {
        const userData: User = {
          id: generateUserId(),
          email: email,
          name: response.user?.name || email.split('@')[0], // Jeśli nie ma name, użyj części emaila
          status: 'logged',
          createdAt: new Date()
        }
        
        // Zapisanie do state
        setUser(userData)
        
        // Zapisanie do cache
        setCache(STORAGE_KEYS.USER, userData)
        setCache(STORAGE_KEYS.AUTH_STATUS, 'logged')
        
        return { success: true, message: 'Zalogowano pomyślnie' }
      } else {
        return { success: false, message: 'Nieprawidłowy email lub hasło' }
      }
    } catch (error) {
      console.error('Błąd logowania:', error)
      return { success: false, message: 'Wystąpił błąd podczas logowania' }
    } finally {
      setIsLoading(false)
    }
  }

  // Funkcja rejestracji
  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true)
      
      // Tutaj byłaby prawdziwa logika rejestracji z API
      const response = await simulateApiCall(email, password, name)
      
      if (response.success) {
        const userData: User = {
          id: generateUserId(),
          email: email,
          name: name,
          status: 'logged',
          createdAt: new Date()
        }
        
        // Zapisanie do state
        setUser(userData)
        
        // Zapisanie do cache
        setCache(STORAGE_KEYS.USER, userData)
        setCache(STORAGE_KEYS.AUTH_STATUS, 'logged')
        
        return { success: true, message: 'Konto zostało utworzone i zalogowane' }
      } else {
        return { success: false, message: 'Wystąpił błąd podczas rejestracji' }
      }
    } catch (error) {
      console.error('Błąd rejestracji:', error)
      return { success: false, message: 'Wystąpił błąd podczas rejestracji' }
    } finally {
      setIsLoading(false)
    }
  }

  // Funkcja wylogowania
  const logout = (): void => {
    setUser(null)
    removeCache(STORAGE_KEYS.USER)
    removeCache(STORAGE_KEYS.AUTH_STATUS)
  }

  // Funkcja aktualizacji danych użytkownika
  const updateUser = (userData: Partial<User>): void => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      setCache(STORAGE_KEYS.USER, updatedUser)
    }
  }

  // Sprawdzenie czy użytkownik jest zalogowany
  const isLoggedIn = user !== null && user.status === 'logged'

  const value: UserContextType = {
    user,
    isLoggedIn,
    isLoading,
    login,
    register,
    logout,
    updateUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

// Funkcja generująca ID użytkownika (w prawdziwej aplikacji to byłoby z serwera)
const generateUserId = (): string => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Symulacja API call (do usunięcia w produkcji)
const simulateApiCall = (email: string, password: string, name?: string): Promise<{ success: boolean; user?: { name: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Symulacja sprawdzenia danych
      if (email && password.length >= 6) {
        resolve({ success: true, user: { name: name || email.split('@')[0] } })
      } else {
        resolve({ success: false })
      }
    }, 1000) // Symulacja opóźnienia API
  })
}

// Komponent do ochrony tras (opcjonalny)
// export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
//   const { isLoggedIn, isLoading } = useUser()

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-white">Ładowanie...</div>
//       </div>
//     )
//   }

//   if (!isLoggedIn) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-white">Musisz być zalogowany aby zobaczyć tę stronę</div>
//       </div>
//     )
//   }

//   return <>{children}</>
// }

// Hook do pobierania informacji o użytkowniku
export const useUserInfo = () => {
  const { user } = useUser()
  
  return {
    userId: user?.id || null,
    email: user?.email || null,
    name: user?.name || null,
    status: user?.status || 'guest',
    createdAt: user?.createdAt || null,
    isLoggedIn: user?.status === 'logged'
  }
}