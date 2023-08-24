function highlightEditor() {
    var editor = document.getElementById('editor');
    var findInput = document.getElementById('findInput').value;
    if (findInput.length > 0) {
        var regex = new RegExp(findInput, 'g');
        var highlightedContent = editor.textContent.replace(regex, match => {
            if (match === findInput) {
                return `<span class="highlight">${match}</span>`;
            } else {
                return match;
            }
        });
        editor.innerHTML = highlightedContent;
    } else {
        editor.innerHTML = editor.textContent;
    }
}



 function findAndReplace() {
            // Get the text area content
            var editor = document.getElementById('editor');
            var content = editor.textContent;
            // Get the find and replace inputs
            var findInput = document.getElementById('findInput').value;
            var replaceInput = document.getElementById('replaceInput').value;
            // Perform the find and replace
            var updatedContent = content.replace(new RegExp(findInput, 'g'), replaceInput);
            // Update the text area with the replaced content
            editor.textContent = updatedContent;
            // Highlight the replaced text
            highlightEditor();
        }
        function highlightEditor() {
            var editor = document.getElementById('editor');
            var findInput = document.getElementById('findInput').value;
            if (findInput.length > 0) {
                var regex = new RegExp(findInput, 'gi');
                var highlightedContent = editor.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
                editor.innerHTML = highlightedContent;
            } else {
                editor.innerHTML = editor.textContent;
            }
        }