// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle")

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open")
})

// Hide mobile menu when clicked outside
const mobileMenu = document.querySelector(".mobile-menu")
const container = document.querySelector(".container")

function hideOnClickOutside(mobileMenu) {
  const clickOutsideListener = (event) => {
    // if (!mobileMenu.contains(event.target) && isVisable(mobileMenu))
    if (event.target.closest(container) === null) {
      mobileMenu.style.display = "none"
      removeClickListener()
    }

    const removeClickListener = () => {
      document.removeEventListener("click", clickOutsideListener)
    }

    document.addEventListener("click", clickOutsideListener)
  }
}

const isVisable = (element) =>
  !!element &&
  !!(
    element.offsetWidth ||
    element.offsetHeght ||
    element.getClientRects().length
  )
