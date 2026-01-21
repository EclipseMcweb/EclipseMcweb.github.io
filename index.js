document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'all 0.6s ease-out';
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }

    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--primary)';
        }
    });

    window.showToast = function(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = 'position: fixed; bottom: 30px; right: 30px; z-index: 99999;';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        const borderColor = type === 'success' ? '#ff7300' : '#ef4444';
        const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

        toast.style.cssText = `
            background: #0e222d;
            border: 2px solid ${borderColor};
            color: white;
            padding: 15px 25px;
            border-radius: 15px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 11px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            animation: slideIn 0.3s ease-out forwards;
        `;

        toast.innerHTML = `<i class="fa-solid ${icon}" style="color: ${borderColor}"></i> ${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            toast.style.transition = '0.5s';
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    };

    const style = document.createElement('style');
    style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
    document.head.appendChild(style);
});
