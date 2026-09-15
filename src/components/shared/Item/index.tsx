type ItemProps = {
  title: string;
  description: string;
};

const Item = ({ title, description }: ItemProps) => {
  return (
    <li>
      <strong className="text-foreground mr-1">{title}:</strong>
      {description}
    </li>
  );
};

export default Item;
