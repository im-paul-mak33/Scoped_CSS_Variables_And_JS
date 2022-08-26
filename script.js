

function updateHandling() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

const inputs = document.querySelectorAll('.options input')

inputs.forEach(input => input.addEventListener('change', updateHandling))
inputs.forEach(input => input.addEventListener('mousemove', updateHandling))