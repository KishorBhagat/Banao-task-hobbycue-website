function PageCard({title, desc, buttonText, theme}) {
  return (
    <div className="page-card rounded d-flex flex-column justify-content-start align-items-start">
        <h4>{title}</h4>
        <p className="desc">{desc}</p>
        <button type="button" class="btn btn-outline-primary">{buttonText}</button>
    </div>
  )
}

export default PageCard