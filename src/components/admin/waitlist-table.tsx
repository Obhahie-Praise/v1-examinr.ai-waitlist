"use client";

import { useState, useEffect, useCallback } from "react";
import { Trash2, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { DeleteConfirmationModal } from "./delete-confirmation-modal";

interface WaitlistUser {
  id: string;
  email: string;
  utm: string | null;
  joinedAt: string;
  position: number;
}

interface PaginatedResponse {
  users: WaitlistUser[];
  total: number;
  page: number;
  totalPages: number;
}

interface WaitlistTableProps {
  onDataChange?: () => void;
}

export function WaitlistTable({ onDataChange }: WaitlistTableProps) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<PaginatedResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [modalTarget, setModalTarget] = useState<string[] | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);

  const fetchPage = useCallback(async (p: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/users?page=${p}`);
      if (!res.ok) throw new Error("Failed to load users.");
      const json: PaginatedResponse = await res.json();
      setData(json);
      setSelected(new Set()); // clear selection on page change
    } catch {
      setError("Could not load waitlist data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(page);
  }, [page, fetchPage]);

  const users = data?.users ?? [];
  const allCurrentIds = users.map((u) => u.id);
  const allSelected = allCurrentIds.length > 0 && allCurrentIds.every((id) => selected.has(id));
  const someSelected = selected.size > 0;

  const toggleAll = () => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(allCurrentIds));
    }
  };

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDeleteRequest = (ids: string[]) => setModalTarget(ids);

  const handleDeleteConfirm = async () => {
    if (!modalTarget) return;
    setDeleteLoading(true);
    try {
      const res = await fetch("/api/admin/users/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: modalTarget }),
      });
      if (!res.ok) throw new Error("Delete failed.");
      setModalTarget(null);
      // If current page becomes empty after deletion, go back one page
      const remaining = (data?.users.length ?? 0) - modalTarget.length;
      const newPage = remaining === 0 && page > 1 ? page - 1 : page;
      setPage(newPage);
      await fetchPage(newPage);
      onDataChange?.();
    } catch {
      setModalTarget(null);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleExport = async () => {
    setExportLoading(true);
    try {
      const res = await fetch("/api/admin/export");
      if (!res.ok) throw new Error("Export failed.");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // silently fail — user can retry
    } finally {
      setExportLoading(false);
    }
  };

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-white-text font-primary font-semibold text-lg">
            Waitlist Users
          </h2>
          {data && (
            <p className="text-light-dull-text text-sm font-primary mt-0.5">
              {data.total.toLocaleString()} total
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {someSelected && (
            <button
              onClick={() => handleDeleteRequest(Array.from(selected))}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-red-500/10 border border-red-500/20 text-red-400 font-primary text-sm font-medium hover:bg-red-500/20 transition-colors duration-200 cursor-pointer"
            >
              <Trash2 size={14} />
              Delete {selected.size} selected
            </button>
          )}
          <button
            onClick={handleExport}
            disabled={exportLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-[10px] border border-white/[0.1] text-light-dull-text hover:text-white-text hover:border-white/[0.2] font-primary text-sm font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50"
          >
            <Download size={14} />
            {exportLoading ? "Exporting…" : "Export CSV"}
          </button>
        </div>
      </div>

      {/* Table wrapper with horizontal scroll */}
      <div className="bg-white/[0.02] border border-white/[0.07] rounded-[16px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="py-3 px-4 text-left">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="w-4 h-4 accent-[#3B82F6] cursor-pointer"
                    aria-label="Select all"
                  />
                </th>
                <th className="py-3 px-4 text-left text-xs font-primary font-medium text-light-dull-text uppercase tracking-wider">
                  #
                </th>
                <th className="py-3 px-4 text-left text-xs font-primary font-medium text-light-dull-text uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-4 text-left text-xs font-primary font-medium text-light-dull-text uppercase tracking-wider">
                  UTM
                </th>
                <th className="py-3 px-4 text-left text-xs font-primary font-medium text-light-dull-text uppercase tracking-wider">
                  Joined
                </th>
                <th className="py-3 px-4 text-right text-xs font-primary font-medium text-light-dull-text uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-light-dull-text text-sm font-primary">
                    Loading…
                  </td>
                </tr>
              )}
              {!loading && error && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-error-red text-sm font-primary">
                    {error}
                  </td>
                </tr>
              )}
              {!loading && !error && users.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-light-dull-text text-sm font-primary">
                    No users yet.
                  </td>
                </tr>
              )}
              {!loading && !error && users.map((user) => {
                const isSelected = selected.has(user.id);
                return (
                  <tr
                    key={user.id}
                    className={`border-b border-white/[0.04] last:border-0 transition-colors duration-150 ${
                      isSelected ? "bg-[#3B82F6]/[0.05]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleOne(user.id)}
                        className="w-4 h-4 accent-[#3B82F6] cursor-pointer"
                        aria-label={`Select ${user.email}`}
                      />
                    </td>
                    <td className="py-3 px-4 text-light-dull-text text-sm font-primary">
                      {user.position}
                    </td>
                    <td className="py-3 px-4 text-white-text text-sm font-primary">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 text-sm font-primary">
                      {user.utm ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20">
                          {user.utm}
                        </span>
                      ) : (
                        <span className="text-light-dull-text/50">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-light-dull-text text-sm font-primary">
                      {formatDate(user.joinedAt)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDeleteRequest([user.id])}
                        className="text-light-dull-text hover:text-red-400 transition-colors duration-200 p-1 rounded cursor-pointer"
                        aria-label={`Delete ${user.email}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data && data.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.06]">
            <p className="text-light-dull-text text-xs font-primary">
              Page {data.page} of {data.totalPages}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={data.page <= 1 || loading}
                className="p-1.5 rounded-[8px] border border-white/[0.1] text-light-dull-text hover:text-white-text hover:border-white/[0.2] disabled:opacity-30 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                disabled={data.page >= data.totalPages || loading}
                className="p-1.5 rounded-[8px] border border-white/[0.1] text-light-dull-text hover:text-white-text hover:border-white/[0.2] disabled:opacity-30 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {modalTarget && (
        <DeleteConfirmationModal
          count={modalTarget.length}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setModalTarget(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
}
