function updateProgress(barId, currentActivations, totalActivations) {
    const percentage = (currentActivations / totalActivations) * 100;
    const bar = document.getElementById(barId).querySelector('.progress');
    const span = bar.parentNode.querySelector('span'); 
    bar.style.width = percentage + '%';
    span.textContent = span.textContent.split(':')[0] + ': ' + currentActivations + '/' + totalActivations;
}

updateProgress('firewallBreach', 333, 333); 
updateProgress('coreDump', 333, 333); 
updateProgress('systemOverride', 333, 333); 
updateProgress('networkInfiltration', 102, 333); 
updateProgress('encryptionBreak', 1, 333); 
updateProgress('bioMads', 2000, 2000); 
updateProgress('secret', 0, 10000); 
