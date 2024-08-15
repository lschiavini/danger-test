# AgGrid common utils

## Utils

### createDataSource

Centralizing this that most places with aggrid need.

## Hooks

### useResizeColsToFit

We use it to resize the columns to fit the window after adjust column updates or after a window resize.

#### TODO

- [ ] We should change this after aggrid 32 so as to not use `gridApi?.sizeColumnsToFit();` for quick changes in the
  grid and
  instead use [flex](https://www.ag-grid.com/react-data-grid/column-sizing/#column-flex).

## Components

Right now there are no components since we didn't want to go with the wrapper course

# Other Decisions

- We decided to add [DangerJS](https://danger.systems/js/) to remind devs to update readme and jsdocs whenever they add
  a new file inside this AgGrid folder

---

- [Original ticket](https://showseekerpilot.atlassian.net/browse/PLT-1575)

