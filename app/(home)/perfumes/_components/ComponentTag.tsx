export default function ComponentTag({
  component,
}: {
  component: ComponentType;
}) {
  return (
    <div className="bg-background shadow-sm px-3 text-sm rounded-md text-primary font-medium">
      {component.name}
    </div>
  );
}
