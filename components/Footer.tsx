
function Footer() {
  return (
    <footer className="flex h-20 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center gap-1">
            This project can be found at{' '}
            <a
            className="text-blue-600"
            href="https://github.com/RicardoMarcal/app-gallery"
            target='_blank'
            rel='noreferrer noopener'
            >
            github.com/RicardoMarcal/app-gallery
            </a>
        </p>
    </footer>
  )
}

export default Footer