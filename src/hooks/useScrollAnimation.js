import { useEffect, useRef } from 'react'

function useScrollAnimation(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If element is already in viewport on load — show it immediately
    const rect = element.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (alreadyVisible) {
      setTimeout(() => {
        element.classList.add('visible')
      }, delay)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('visible')
          }, delay)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return ref
}

export default useScrollAnimation