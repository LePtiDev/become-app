import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export const createUser = async (form) => {
  const auth = getAuth()

  const credentials = await createUserWithEmailAndPassword(auth, form.email, form.password).catch((error) => {
    console.log(error)
  })
  return credentials
}
export const loginUser = async (form) => {
  const auth = getAuth()
  console.log('ici')
  const credentials = await signInWithEmailAndPassword(auth, form.email, form.password).catch((error) => {
    console.log(error)
  })
  return credentials
}

export const initUser = () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
    } else {
      // User is signed out
      // ...
      console.log('no user')
    }
  })
}

export const signOut = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  return result
}
