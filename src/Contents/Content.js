import Intro from "./Intro";
import projectsData from "../data/projects.json"
import ShowBox from "./ShowBox";

const Content = () => {

    const projects = JSON.parse(JSON.stringify(projectsData.projects));
    console.log(projects);

    return (
        <main>
            <Intro />
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        { (projects.length) ? (
                            projects.map((project) => (
                                <ShowBox 
                                    key = {project.id}
                                    project = {project}
                                />
                            ))  
                        ) : (
                            <p style={{marginTop: '2rem'}}>Your list is empty.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content;
