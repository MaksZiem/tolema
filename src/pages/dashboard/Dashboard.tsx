import React from 'react'
import { useUser, useUserInfo } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

// Komponent Dashboard (tylko dla zalogowanych)
const Dashboard: React.FC = () => {
  const { user, logout } = useUser()
  const { name, email, createdAt } = useUserInfo()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Wyloguj się
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Informacje o użytkowniku</h2>
              <div className="space-y-2">
                <p><strong>ID:</strong> {user?.id}</p>
                <p><strong>Imię:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Status:</strong> {user?.status}</p>
                <p><strong>Konto utworzone:</strong> {createdAt?.toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Statystyki</h2>
              <div className="space-y-2">
                <p><strong>Czas od rejestracji:</strong> {
                  createdAt ? 
                  Math.floor((Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24)) + ' dni' :
                  'Nieznany'
                }</p>
                <p><strong>Typ konta:</strong> Premium</p>
                <p><strong>Ostatnie logowanie:</strong> Dzisiaj</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profil użytkownika */}
        <div className="mt-8">
          <UserProfile />
        </div>
      </div>
    </div>
  )
}

// Komponent profilu użytkownika
const UserProfile: React.FC = () => {
  const { user, updateUser } = useUser()
  const [isEditing, setIsEditing] = React.useState(false)
  const [editData, setEditData] = React.useState({
    name: user?.name || '',
    email: user?.email || ''
  })

  const handleSave = () => {
    if (user) {
      updateUser({
        name: editData.name,
        email: editData.email
      })
      setIsEditing(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profil użytkownika</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {isEditing ? 'Anuluj' : 'Edytuj'}
        </button>
      </div>
      
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imię i nazwisko
            </label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={editData.email}
              onChange={(e) => setEditData({...editData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Zapisz zmiany
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <p><strong>Imię:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Status:</strong> {user?.status}</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard