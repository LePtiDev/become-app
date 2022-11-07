<template>
  <div class="relative mb-[24px]">
    <div class="flex justify-between">
      <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
      <span v-if="hint" id="email-optional" class="text-sm text-gray-500">{{ hint }}</span>
    </div>
    <div class="relative rounded-md shadow-sm">
      <Field
        :id="name"
        :name="name"
        :type="type"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :disabled="disabled"
        class="block w-full appearance-none rounded-md border px-3 py-2 shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
        :value="modelValue"
        :class="
          error
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
            : 'focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 border-gray-300'
        "
        @input="updateValue($event.target)"
      />
      <Transition name="animation-input-error">
        <div v-if="error" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon class="h-5 w-5 text-red-500" />
        </div>
      </Transition>
    </div>
    <Transition name="animation-input-error">
      <p v-if="error" id="email-error" class="absolute right-0 mt-1 text-xs text-right text-red-600">{{ error }}</p>
    </Transition>
    <Transition name="animation-input-help-text">
      <p v-if="!error && helpText" id="email-description" class="absolute left-0 mt-1 text-xs text-gray-500">{{ helpText }}</p>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
// Imports
import { Field } from 'vee-validate'
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'

// Props & emits
defineProps<{
  name: string
  error?: string
  label?: string
  type?: string
  autocomplete?: string
  placeholder?: string
  helpText?: string
  disabled?: boolean
  hint?: string
  modelValue?: string
}>()
const emits = defineEmits(['update:modelValue'])

// Methods
const updateValue = (target: any) => {
  const content = target.value
  emits('update:modelValue', content)
}
</script>
<style scoped>
/* Error */
.animation-input-error-enter-active,
.animation-input-error-leave-active {
  transition: all 0.3s ease;
}

.animation-input-error-enter-from,
.animation-input-error-leave-to {
  opacity: 0;
  transform: translateX(20%);
}

/* Help text */
.animation-input-help-text-enter-active,
.animation-input-help-text-leave-active {
  transition: all 0.3s ease;
}

.animation-input-help-text-enter-from,
.animation-input-help-text-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
