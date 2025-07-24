type MainProps = {
  name: string;
  industry: string;
  website: string;
  description: string;
};

export default function DashboardMainContent({
  name,
  industry,
  website,
  description,
}: MainProps) {
  return (
    //TODO Make this good looking dashboard
    <main className="flex-1 p-6 text-gray-800 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="mb-2">
          <strong>Industry:</strong> {industry}
        </p>
        {website && (
          <p className="mb-2">
            <strong>Website:</strong>{" "}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {website}
            </a>
          </p>
        )}
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </main>
  );
}
