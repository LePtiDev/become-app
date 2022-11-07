<template>
  <div class="layout">
    <div class="mb-8">
      <h1 class="text-blue-500 text-3xl font-bold">Content de te revoir <span>👋</span></h1>
      <p class="text-sm mt-4 text-gray-400">Nous somme content de te revoir. <br />Pour utiliser l'application veuillez vous connecter.</p>
    </div>

    <Form v-slot="{ errors }" :validation-schema="schema" class="h-[100%] flex flex-col justify-between" @submit="loginUser">
      <div>
        <!-- Inputs -->
        <ui-input label="Email" type="email" name="email" :error="errors.email" placeholder="Jean.dupont@mail.com" />
        <ui-input class="mt-[24px]" label="Mot de passe" type="password" name="password" :error="errors.password" placeholder="***********" />

        <!-- Forgot -->
        <div class="w-full flex justify-end text-sm text-gray-400">
          <nuxt-link class="underline" to="/auth/forgot">Mot de passe oublié</nuxt-link>
        </div>
      </div>

      <div>
        <!-- Buttons -->
        <ui-button class="w-full mt-[34px]" type="submit" color="primary">Me connecter</ui-button>

        <!-- Other login -->
        <ui-spacer>Autre moyen de connexion</ui-spacer>
        <div class="flex flex-col">
          <ui-button class="w-full mb-4" type="button" color="secondary">
            <img class="h-4 mr-2 -mt-1" src="@/public/images/compagnies/apple.svg" />
            Continuer avec Apple
          </ui-button>
          <ui-button class="w-full" type="button" color="secondary">
            <img class="h-4 mr-2" src="@/public/images/compagnies/google.png" />
            Continuer avec Google
          </ui-button>
        </div>

        <!-- Go to register -->
        <p class="text-center my-[32px] text-gray-400">Pas encore de compte ? <span class="text-blue-400">Créé le</span></p>
      </div>
    </Form>
  </div>
</template>
<script lang="ts" setup>
// Imports
import * as yup from 'yup'
import { Form } from 'vee-validate'
import UiButton from '~~/components/ui/button.vue'
import UiInput from '~~/components/ui/input.vue'
import UiSpacer from '~~/components/ui/spacer.vue'

// Data
const schema = yup.object({
  email: yup.string().required("L'email est requis"),
  password: yup.string().required('Le mot de passe est requis'),
})
</script>
