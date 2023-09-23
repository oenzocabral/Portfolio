const Certificate = ({ imageUrl, title, projects }) => (
  <div className="certificate">
    <img src={imageUrl} alt={`Certificate for ${title}`} />
    <div className="certificate-info">
      <h2>{title}</h2>
      <h3>Related Projects:</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <span className="mr-2">
              <i className="bi bi-github"></i> {/* GitHub icon */}
            </span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Certificate;