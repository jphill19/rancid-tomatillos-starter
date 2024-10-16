import './mcard.component.css'


export default function Mcard({ title, vote_count, image }) {
  return (
    <div className="mcard">
      <img src={image} alt={title} className="mcard-image" />
      <p>{vote_count}</p>
    </div>
  );
}