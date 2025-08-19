export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

export const TodoFilter = ({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
  totalCount,
}: TodoFilterProps) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: "All", count: totalCount },
    { key: "active", label: "Active", count: activeCount },
    { key: "completed", label: "Completed", count: completedCount },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-button ${currentFilter === key ? "active" : ""}`}
          >
            {label} ({count})
          </button>
        ))}
      </div>
    </div>
  );
};
