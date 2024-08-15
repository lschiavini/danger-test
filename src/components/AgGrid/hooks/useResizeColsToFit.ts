import { useEffect } from 'react';

/**
 * This hook resizes the columns to fit the grid automatically when we hide
 * or show a column, or when we change the window size
 * @param gridApi
 * @param columnDefs
 * @param reload bypass the normal behavior of the hook and force the resize.
 */
export const useResizeColsToFit = (
  gridApi: any | null | undefined,
  columnDefs: any[],
  reload?: () => void,
) => {
  // const [width = 0] = useWindowSize();

  const hideColumnsString = columnDefs
    ?.map((columnDef) =>
      columnDef.children && !columnDef.hide
        ? columnDef.children.map(
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
    gridApi?.sizeColumnsToFit();
  }, [ gridApi, hideColumnsString]);
};

