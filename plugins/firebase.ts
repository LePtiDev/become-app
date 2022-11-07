import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const db = getFirestore(app)
// const auth = getAuth(app)

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Config firebase
  const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGING_SENDER_ID,
    appId: config.APP_ID,
  }

  // App init
  const app = initializeApp(firebaseConfig)

  initUser()

  return {
    provide: {
      app,
    },
  }
})
