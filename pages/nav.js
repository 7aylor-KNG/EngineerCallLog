const navHTML = `
    <div class="nav">
        <a href="dashboard.html" id="nav-dashboard">Dashboard</a>
        <a href="log.html" id="nav-log">Log a Ticket</a>
        <a href="history.html" id="nav-history">History</a>
        <a href="admin.html" id="nav-admin">Settings</a>
        <button id="logoutBtn">Logout</button>
    </div>
`;

class NavBar extends HTMLElement {
    connectedCallback() {
        // Inject the HTML
        this.innerHTML = navHTML;
        
        // Check the current URL to see which page we are on
        const currentPage = window.location.pathname.split('/').pop();
        
        // Highlight the correct link automatically
        if (currentPage.includes('dashboard')) this.querySelector('#nav-dashboard').classList.add('active');
        else if (currentPage.includes('log')) this.querySelector('#nav-log').classList.add('active');
        else if (currentPage.includes('history')) this.querySelector('#nav-history').classList.add('active');
        else if (currentPage.includes('admin')) this.querySelector('#nav-admin').classList.add('active');
    }
}

// Define the custom HTML tag
customElements.define('vent-nav', NavBar);
