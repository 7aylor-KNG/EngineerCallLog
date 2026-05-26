const navHTML = `
    <style>
        .vent-nav-bar { 
            background: #fff; 
            padding: 15px 20px; 
            border: 2px solid #000;
            border-radius: 8px; 
            margin-bottom: 30px; 
            display: flex; 
            gap: 20px; 
            align-items: center;
        }
        .vent-nav-bar a { 
            color: #000; 
            text-decoration: none; 
            font-weight: bold; 
            padding: 8px 12px;
            border-radius: 4px;
            transition: background 0.2s, color 0.2s;
            font-family: system-ui, -apple-system, sans-serif;
        }
        .vent-nav-bar a:hover, .vent-nav-bar a.active { 
            background: #000; 
            color: #fff; 
        }
        .vent-nav-bar button {
            margin-left: auto;
            background: #000;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            font-family: system-ui, -apple-system, sans-serif;
        }
        .vent-nav-bar button:hover {
            background: #333;
        }
    </style>
    <div class="vent-nav-bar">
        <a href="dashboard.html" id="nav-dashboard">Dashboard</a>
        <a href="log.html" id="nav-log">Log a Ticket</a>
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
        else if (currentPage.includes('log')) this.querySelector('#nav-log').classList.add('active');
        else if (currentPage.includes('history')) this.querySelector('#nav-history').classList.add('active');
        else if (currentPage.includes('admin')) this.querySelector('#nav-admin').classList.add('active');
    }
}

customElements.define('vent-nav', NavBar);
