type ModulePlaceholderProps = {
  title: string;
  description: string;
};

export default function ModulePlaceholder({
  title,
  description,
}: ModulePlaceholderProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <p className="mb-2 text-sm font-medium text-brand-500">
        Masa Motos
      </p>
      <h1 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}