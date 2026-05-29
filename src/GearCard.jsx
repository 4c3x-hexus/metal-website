function GearCard({ name, description, img }) {
    return (
        <div className="card">
            <img src={img} alt={name} className="guitar-img" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default GearCard;