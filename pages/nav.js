const navHTML = `
    <div class="vent-nav-bar">
        <a href="dashboard.html" id="nav-dashboard">Dashboard</a>
        <a href="log.html" id="nav-log">Log a Ticket</a>
        <a href="login-code.html" id="nav-login-code">Login Codes</a>
        <a href="history.html" id="nav-history">History</a>
        <a href="admin.html" id="nav-admin">Settings</a>
        <button id="logoutBtn">Logout</button>
    </div>
`;

class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = navHTML;
        
        const currentPage = window.location.pathname.split('/').pop();
        
        if (currentPage.includes('dashboard')) this.querySelector('#nav-dashboard').classList.add('active');
        else if (currentPage.includes('log.html')) this.querySelector('#nav-log').classList.add('active');
        else if (currentPage.includes('login-code')) this.querySelector('#nav-login-code').classList.add('active');
        else if (currentPage.includes('history')) this.querySelector('#nav-history').classList.add('active');
        else if (currentPage.includes('admin')) this.querySelector('#nav-admin').classList.add('active');
    }
}

customElements.define('vent-nav', NavBar);
