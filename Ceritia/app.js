document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        'home': document.getElementById('home-section'),
        'chat': document.getElementById('chat-section'),
        'mood': document.getElementById('mood-section'),
        'dashboard': document.getElementById('dashboard-section'),
        'community': document.getElementById('community-section')
    };

    const navButtons = {
        'home': document.getElementById('nav-home'),
        'chat': document.getElementById('nav-chat'),
        'mood': document.getElementById('nav-mood'),
        'dashboard': document.getElementById('nav-dashboard'),
        'community': document.getElementById('nav-community')
    };

    function showSection(sectionId) {
        // Hide all sections
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        // Show selected section
        sections[sectionId].classList.remove('hidden');
        
        // Update nav buttons
        Object.entries(navButtons).forEach(([id, button]) => {
            if (id === sectionId) {
                button.classList.remove('text-gray-500');
                button.classList.add('text-primary');
            } else {
                button.classList.remove('text-primary');
                button.classList.add('text-gray-500');
            }
        });
    }

    // Set up click handlers for nav buttons
    navButtons.home.addEventListener('click', () => showSection('home'));
    navButtons.chat.addEventListener('click', () => showSection('chat'));
    navButtons.mood.addEventListener('click', () => showSection('mood'));
    navButtons.dashboard.addEventListener('click', () => showSection('dashboard'));
    navButtons.community.addEventListener('click', () => showSection('community'));
});
