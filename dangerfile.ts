import { danger, warn } from 'danger'

const agGridFiles = danger.git.modified_files.concat(danger.git.created_files)
  .filter(file => file.startsWith('src/components/AgGrid/') && !file.endsWith('README.md'))

if (agGridFiles.length > 0) {
  const changedFolders = new Set(agGridFiles.map(file => {
    const parts = file.split('/');
    const agGridIndex = parts.indexOf('AgGrid');
    return parts[agGridIndex + 1];
  }).filter(folder => folder !== undefined));
  
  changedFolders.forEach(folder => {
    switch(folder) {
      case 'utils':
        warn('Files in src/components/AgGrid/utils have changed. Please update the "Utils" section in src/components/AgGrid/README.md')
        break
      case 'hooks':
        warn('Files in src/components/AgGrid/hooks have changed. Please update the "Hooks" section in src/components/AgGrid/README.md')
        break
      case 'components':
        warn('Files in src/components/AgGrid/components have changed. Please update the "Components" section in src/components/AgGrid/README.md')
        break
      default:
        warn(`Files in src/components/AgGrid/${folder} have changed. Please review and update src/components/AgGrid/README.md if necessary`)
    }
  })
}


// Check for a CHANGELOG entry
// const hasChangelog = danger.git.modified_files.includes("CHANGELOG.md")
// if (!hasChangelog) {
//   warn("Please add a CHANGELOG entry for your changes.")
// }
 
 // Check that every file touched has a corresponding test
 const allFiles = danger.git.modified_files.concat(danger.git.created_files)
 const hasAppChanges = allFiles.some(file => file.includes("src/"))
 const hasTestChanges = allFiles.some(file => file.includes("__tests__/"))
 
 if (hasAppChanges && !hasTestChanges) {
   warn("There are app changes, but no test changes. Consider adding tests.")
 }
// 
// // Check for large PRs
// const bigPRThreshold = 500
// if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
//   warn(':exclamation: Big PR')
//   message(`Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`)
// }
