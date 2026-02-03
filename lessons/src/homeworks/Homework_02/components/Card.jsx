function Card() {
  return (
    <div className="card">
      <img
        className="card-avatar"
        src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        alt="Homer Simpson"
      />
      <h2>Гомер Симпсон</h2>
      <p><strong>Род деятельности:</strong> инспектор по безопасности на АЭС</p>
      <p><strong>Хобби:</strong> пончики, пиво Duff, сон</p>
    </div>
  );
}

export default Card;

