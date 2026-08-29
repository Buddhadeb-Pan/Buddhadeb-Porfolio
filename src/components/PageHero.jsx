function PageHero({
    eyebrow,
    title,
    description,
    number,
}) {
    return (
        <section className="placeholder-page">
            <div className="container placeholder-page-grid">
                <div>
                    <p className="page-eyebrow">
                        {eyebrow}
                    </p>

                    <h1>{title}</h1>

                    <p>{description}</p>
                </div>

                <span
                    className="placeholder-number"
                    aria-hidden="true"
                >
                    {number}
                </span>
            </div>
        </section>
    );
}

export default PageHero;