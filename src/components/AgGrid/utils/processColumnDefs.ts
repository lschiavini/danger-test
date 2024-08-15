/**
 * This function is used to convert undefined to values. Ag-grid was
 * not detecting a change from hide: true, to hide: undefined. So we
 * were changing the key to make it reloads, but it reloads everything
 * and it is worse
 * @param columnDefs
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processColumnDefs = (columnDefs: any[]) => {
  return columnDefs.map((columnDef) => ({
    ...columnDef,
    pinned: columnDef.pinned || null,
    hide: columnDef.hide || false,
  }));
};

