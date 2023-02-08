import { ReactElement, useState } from 'react'

export function useMultistepForm(stepComponents: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  function next() {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex >= stepComponents.length - 1) {
        return prevIndex
      }

      return prevIndex + 1
    })
  }

  function back() {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex <= 0) {
        return prevIndex
      }

      return prevIndex - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    stepComponent: stepComponents[currentStepIndex],
    stepComponents,
    goTo,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === stepComponents.length - 1,
  }
}
