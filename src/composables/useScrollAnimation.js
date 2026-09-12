import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

let ctx = null

export function initScrollAnimation() {
  if (typeof window === 'undefined') return

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  // Clean up any existing context first
  if (ctx) {
    ctx.revert()
  }

  // Refresh ScrollTrigger after DOM changes
  ScrollTrigger.refresh()

  ctx = gsap.context(() => {
    // General reveal animation for sections
    const revealElements = document.querySelectorAll('.scroll-reveal')
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )
    })

    // Staggered lists (cards, bullet items, skill groups)
    const staggerContainers = document.querySelectorAll('.scroll-stagger')
    staggerContainers.forEach((container) => {
      const items = container.children
      gsap.fromTo(
        items,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
  })
}

export function cleanupScrollAnimation() {
  if (ctx) {
    ctx.revert()
    ctx = null
  }
}
