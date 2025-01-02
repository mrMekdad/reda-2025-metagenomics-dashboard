// Red@ entrypoint for Metagenomics Dashboard
const root = document.getElementById('app');
const state = { project: 'metagenomics-dashboard', author: 'Red@', theme: 'bioinformatics', milestones: 3 };
if (root) root.textContent = JSON.stringify(state, null, 2);
