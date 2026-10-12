export default function Chip({ as: Tag = 'span', children }) {
  return <Tag className="chip">{children}</Tag>;
}
