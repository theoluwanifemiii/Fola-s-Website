import { Link } from 'react-router-dom';
import { TagList } from './Tags.jsx';

export default function WorkCard({ to, tags, title, text, media }) {
  return (
    <Link className="work-card" to={to}>
      {media}
      <div className="work-card__body">
        <TagList items={tags} size="xs" />
        <h3 className="work-card__title">{title}</h3>
        <p className="body-sm" style={{ lineHeight: 1.5 }}>{text}</p>
        <p className="work-card__cta">READ CASE STUDY →</p>
      </div>
    </Link>
  );
}
