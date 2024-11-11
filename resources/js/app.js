document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');

    // Load existing feedback on page load
    fetchFeedback();

    feedbackForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Clear previous error messages
        clearErrors();

        // Client-side validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();

        let isValid = true;

        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        }

        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (comment === '') {
            showError('comment', 'Comment is required');
            isValid = false;
        } else if (comment.length < 10) {
            showError('comment', 'Comment must be at least 10 characters long');
            isValid = false;
        }

        if (!isValid) return;

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    comment
                })
            });

            if (response.ok) {
                feedbackForm.reset();
                fetchFeedback();
            } else {
                const data = await response.json();
                if (data.errors) {
                    Object.keys(data.errors).forEach(key => {
                        showError(key, data.errors[key][0]);
                    });
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    async function fetchFeedback() {
        try {
            const response = await fetch('/api/feedback');
            const feedback = await response.json();

            feedbackList.innerHTML = feedback.map(item => `
                <div class="bg-white shadow-md rounded-lg p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-lg font-semibold">${escapeHtml(item.name)}</h3>
                        <span class="text-sm text-gray-500">${formatDate(item.created_at)}</span>
                    </div>
                    <p class="text-gray-600 mb-2">${escapeHtml(item.comment)}</p>
                    <p class="text-sm text-gray-500">${escapeHtml(item.email)}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function showError(field, message) {
        const errorElement = document.getElementById(`${field}Error`);
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }

    function clearErrors() {
        ['name', 'email', 'comment'].forEach(field => {
            const errorElement = document.getElementById(`${field}Error`);
            errorElement.textContent = '';
            errorElement.classList.add('hidden');
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
});
