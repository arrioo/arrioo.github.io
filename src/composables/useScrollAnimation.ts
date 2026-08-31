import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  let ctx: gsap.Context

  onMounted(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) return

    ctx = gsap.context(() => {
      // General reveal animation for sections
      const revealElements = document.querySelectorAll('.scroll-reveal')
      
      revealElements.forEach((el) => {
        gsap.fromTo(el, 
          { 
            y: 30, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

      // Staggered lists (e.g. project cards, experience items)
      const staggerContainers = document.querySelectorAll('.scroll-stagger')
      
      staggerContainers.forEach((container) => {
        const items = container.children
        gsap.fromTo(items,
          {
            y: 20,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    })
  })

  onUnmounted(() => {
    if (ctx) {
      ctx.revert() // Cleanup animations
    }
  })
}
