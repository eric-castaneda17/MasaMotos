const metrics = [
  { label: "Ventas hoy", value: "$0" },
  { label: "Facturas", value: "0" },
  { label: "Productos", value: "0" },
  { label: "Stock bajo", value: "0" },
];

export default function Home() {
  return (
    <div>
      {/* 1. Encabezado del Dashboard */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-brand-500">Masa Motos</p>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            Dashboard
          </h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Sistema de ventas e inventario
        </p>
      </div>

      {/* 2. Tarjetas de Métricas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Cuadro informativo de abajo */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white/90">
          Panel de control principal de Masa Motos.
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Desde aquí podrás supervisar el inventario, las ventas diarias y el rendimiento de tu negocio en tiempo real.
        </p>
      </div>

    </div>
  );
}