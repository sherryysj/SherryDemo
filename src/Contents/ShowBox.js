const ShowBox = (project) => {

    console.log(project);

    return (
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></svg>

            <div class="card-body">

              <h2>{project.project.name}</h2> 
              <p class="card-text">{project.project.description}</p>
              <p class="card-text">{project.project.language}</p>
              <p class="card-text">{project.project.specification}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a type="button" class="btn btn-sm btn-outline-secondary" href="https://www.linkedin.com/in/shujie-yang-74084a17a">Github</a>
                </div>
                <small class="text-muted">{project.project.type}</small>
              </div>

            </div>

          </div>
        </div>
    )
}

export default ShowBox;
