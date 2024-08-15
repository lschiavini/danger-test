import { danger, warn } from 'danger'

const agGridFiles = danger.git.modified_files.filter(file => file.startsWith('src/components/AgGrid/'))
const readmeFile = 'src/components/AgGrid/README.md'
const readmeChanged = danger.git.modified_files.includes(readmeFile)

if (agGridFiles.length > 0 && !readmeChanged) {
  const changedFolders = new Set(agGridFiles.map(file => {
    const parts = file.split('/');
    const agGridIndex = parts.indexOf('AgGrid');
    return parts[agGridIndex + 1];
  }).filter(folder => folder !== undefined));
  
  changedFolders.forEach(folder => {
    switch(folder) {
      case 'utils':
        warn('Files in AgGrid/utils have changed. Please update the "Utils" section in src/components/AgGrid/README.md')
        break
      case 'hooks':
        warn('Files in AgGrid/hooks have changed. Please update the "Hooks" section in src/components/AgGrid/README.md')
        break
      case 'components':
        warn('Files in AgGrid/components have changed. Please update the "Components" section in src/components/AgGrid/README.md')
        break
      default:
        warn(`Files in AgGrid/${folder} have changed. Please review and update src/components/AgGrid/README.md if necessary`)
    }
  })
}
