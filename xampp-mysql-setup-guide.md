XAMPP & MySQL Full Setup and Configuration Guide
================================================

What is XAMPP?
--------------
XAMPP is a free and open-source cross-platform web server solution package. It provides a local development environment and includes:

1. Apache – Web Server
2. MySQL – Relational Database Management System
3. phpMyAdmin – Web-based GUI for MySQL
4. PHP – Server-side scripting language

This means you do not need to install MySQL or Apache separately, because XAMPP already includes them.

What is phpMyAdmin?
-------------------
phpMyAdmin is a browser-based GUI application bundled with XAMPP, which allows you to:
- Create, view, modify, and delete databases and tables
- Run SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Perform export/import operations
- Manage users and permissions

Uninstalling XAMPP (If there are port problems or misconfigurations)
---------------------------------------------------------------------
Uninstall Steps:
1. Stop all services (Apache, MySQL, etc.) from the XAMPP Control Panel.
2. Go to: Control Panel > Programs > Uninstall a Program → Uninstall XAMPP.
3. Manually delete the C:\xampp directory if it was not removed during uninstallation.

Installing XAMPP Properly
-------------------------
1. Download XAMPP from: https://www.apachefriends.org/
2. Install XAMPP
3. Launch the XAMPP Control Panel
4. Start the Apache and MySQL services

Case 1: MySQL is NOT Installed Separately
-----------------------------------------
This is the most common setup where you're only using XAMPP’s built-in MySQL.

Problem:
Sometimes Apache does not start because port 80 or 443 is already in use by another service (like IIS or Skype).

Fix (Change Apache Port):
Step 1: Change Apache Port
- Open XAMPP Control Panel
- Click Config (next to Apache) → Open httpd.conf
- Find this line: Listen 80 → Replace with: Listen 8090
- Find this line: ServerName localhost:80 → Replace with: ServerName localhost:8090
- Save and close the file

Step 2: Restart Apache
- Now restart Apache in the XAMPP Control Panel.
- It should work without conflict.

To open phpMyAdmin, visit: http://localhost:8090/phpmyadmin

Case 2: MySQL is Installed Separately
-------------------------------------
If you've installed a standalone version of MySQL (e.g., via MySQL Installer), then the default port 3306 will be in use.

Problem:
XAMPP’s MySQL will not start because its default port (3306) is already occupied by the standalone MySQL server.

Fix (Change XAMPP’s MySQL Port):
Step 1: Change MySQL Port in XAMPP
- Open XAMPP Control Panel
- Click Config next to MySQL → Open my.ini
- Find the line: port=3306 → Change to: port=3307
- Save and close the file
- Restart MySQL from XAMPP

Step 2: Update phpMyAdmin Configuration
- Go to: C:\xampp\phpMyAdmin\config.inc.php
- Find the line: $cfg['Servers'][$i]['host'] = 'localhost';
- Replace with: $cfg['Servers'][$i]['host'] = 'localhost:3307';
- Save and close the file

Now, if you also changed the Apache port, access phpMyAdmin via: http://localhost:8090/phpmyadmin

If you didn’t change Apache’s port, use: http://localhost/phpmyadmin

Conclusion
----------
Whether you are using XAMPP’s internal MySQL server or a separately installed MySQL server, make sure the ports are configured properly to avoid conflicts. Use the XAMPP Control Panel to manage services, and phpMyAdmin to create databases and run queries. This setup allows you to work with MySQL for development using either GUI (phpMyAdmin) or through Express.js applications running locally.
