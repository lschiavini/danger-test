import { useEffect } from 'react';

/**
 * This hook resizes the columns to fit the grid automatically when we hide
 * or show a column, or when we change the window size
 * @param gridApi
 * @param columnDefs
 * @param reload bypass the normal behavior of the hook and force the resize.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useResizeColsToFit = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gridApi: any | null | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnDefs: any[],
  reload?: () => void,
) => {
  const hideColumnsString = columnDefs
    ?.map((columnDef) =>
      columnDef.children && !columnDef.hide
        ? columnDef.children.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (children: any) => `${children.headerName}${children.hide}`,
          )
        : `${columnDef.field}:${columnDef.hide}`,
    )
    .toString(); // used to verify if some column changed the hide value
  useEffect(() => {
    if (reload) {
      reload?.();
      return;
    }
    console.log('changing here')
    gridApi?.sizeColumnsToFit();
  }, [gridApi, hideColumnsString, reload]);
};
