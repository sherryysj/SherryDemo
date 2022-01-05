import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
    return (
        <header>
            <div class="collapse bg-dark" id="navbarHeader">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-8 col-md-7 py-4">
                            <h4 class="text-white">About me</h4>
                            <p class="text-muted">Passionate and self-motivated Full Stack Developer looking for an opportunity to develop exciting projects, especially for web applications or computer/mobile games.</p>
                            <p class="text-muted">Experience in developing many web applications through Master course projects.</p>
                            <p class="text-muted">Equipped with strong interpersonal and communication skills with the aptitude to collaborate with developers, designers and product owners to avail interactive and scalable sites and software.</p>
                        </div>

                        <div class="col-sm-4 offset-md-1 py-4">
                            <h4 class="text-white">Contact</h4>
                            <ul class="list-unstyled">
                                <li><a href="https://www.linkedin.com/in/shujie-yang-74084a17a" class="text-white">Linkedin</a></li>
                                <li><a href="https://github.com/sherryysj" class="text-white">Github</a></li>
                                <li><a href="mailto:sherryysj@gmail.com" class="text-white">Email me</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="https://www.linkedin.com/in/shujie-yang-74084a17a" class="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 20 20">
                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
                        </svg>
                        <strong>Sherry.Y</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span>About me</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
