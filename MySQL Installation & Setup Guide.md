
# MySQL Installation & Setup Guide

## About MySQL
- MySQL is widely used open-source relational database management system (RDBMS).
- It stores data in tables,with rows representing individual records and columns representing data attributes.
- MySQL uses Structured Query Language (SQL) for managing and manipulating data.

## Installing MySQL
You can download the MySQL installer from the official website:
[MySQL Installer](https://dev.mysql.com/downloads/installer/)

### Step-1 : 
**Choose and download the MySQL Community Installer**
- Visit the official MySQL downloads page
- Select the MySQL Installer for Windows (Community Edition)

### Step-2 : 
**Start the download and launch the installer**

- After selecting the installer, you will be redirected to an Oracle login/signup page
- Click "No thanks, just start my download." to download directly without signing in
- Once the installer is downloaded, open the file
- Click "Yes" on any pop-up permission boxes to allow the installer to run
### Step-3 :
**Choose Custom setup type to manually select only the required components**

- In Available Products, expand MySQL Servers
- Again expand MySQL Server -> then click on MySQL Server 8.0
- Select the top-most version and click the -> arrow to move it to the Products To Be Installed section
- Expand Applications
- Select MySQL Workbench -> choose the top-most version (or the only one shown)
- Click the -> arrow to add it to the install list
- Still in Applications, select MySQL Shell
- Choose the version and move it to the install list
Only select MySQL Server, MySQL Workbench, and MySQL Shell.

No need to add other products.

**Workbench** provides a user-friendly interface to manage databases.
**Shell** offers a command-line interface to interact with MySQL.
### Step-4 :
**Begin installation of selected MySQL products**
- Click Next
- Click Execute to start the installation process
- After all products are successfully installed, click Next
- Proceed to the configuration phase by clicking Next again

### Step-5 :
**In Type and Networking, keep all settings as default**
- Make sure nothing is changed
- Note the port number (usually 3306) — this is required when connecting to the database later
- Click Next
### Step-6 :
**In Authentication Method, select Use Strong Password Encryption**
- then click next
- Set a strong and easily memorable root password
- This password is required every time you open MySQL Workbench.
**REMEMBER YOUR PASSWORD OR SAVE IT SOMEWHERE**
- Click Next
- You'll now see your Windows Service Name (leave it as is)
- Click Next
- On the permissions screen, grant full access (Yes - Full Grant Access)

- Click Next
- Click Execute to apply all configuration steps
- Once the configuration is complete, click Finish

### After Successful Installation
Once MySQL is installed and configured successfully:

- You can open MySQL Workbench to manage your databases through a graphical user interface.
- You can also use MySQL Shell if you prefer working with the command-line interface.








