import "./profileIcon.css";
interface Props {
  size?: number;
}

export default function ProfileIcon({ size }: Props) {
  const iconSize = size ? `${size}px` : undefined;

  return (
    <div
      className={`rounded-circle glass ${!size ? "icon" : ""}`}
      style={iconSize ? { width: iconSize, height: iconSize } : {}}
    >
      <a href="/profile">
        <img
          src="img/profile_icon.png"
          alt="Profile Icon"
          className="img-fluid"
        />
      </a>
    </div>
  );
}
