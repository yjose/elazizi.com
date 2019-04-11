---
date: 2017-11-05
title: "A step by step guide to setup PHP (Laravel) environment (Linux)."
categories: ["web", "dev"]
keywords: ["laravel", "php", "linux"]
published: true
banner: "./banner.png"
---

This article is a step by step tutorial to get started with PHP and laravel in Linux environment ( Ubuntu ). By installing Apache2, Mysql and PHP, your LAMP server is ready to host your PHP application.

At the end of this post, you’ll know how to add your custom domain for your local environment.

If you are familiar with Docker check My post :[Laravel & Docker, Zero config with Vessel](https://hackernoon.com/laravel-docker-zero-config-with-vessel-60e1aa173ea8).

> _Let’s start !!!_

As you expected from all kind of Linux tutorials you should first update and upgrade your system by running :

```sh
sudo apt-get update
sudo apt-get upgrade
```

Now your system and packages system is up to date.

Next, you need to install some basics dependencies to avoid all kind of problems in your workflow

```sh
sudo apt-get install -y git curl wget zip unzip
```

#### Installing Apache2 server :

```sh
sudo apt-get install apache2
```

To make sure that the server is running you can execute this command in your terminal

```sh
sudo systemctl status apache2
```

![](https://cdn-images-1.medium.com/max/800/1*YfnirRP-hhe6ruktm8OcvQ.png)

```sh
sudo systemctl status apache2
```

As you see above, the service appears to have started successfully, you can also access to your server through the [http://localhost](http://localhost/) address and you will see Apache2 default home page.

It is important to know that all your web content must be under the /var/www/html directory. you can check the Bonus section to make any folder as your root web content to know how to config.

To master Appche2 config you need to master this 6 commands line:

- **a2enmod** (**a**pache**2** **en**able **mod**e) : To enable an Apache2 mod like rewrite mode.
- **a2dismod** (**a**pache**2** **dis**able **mod**e) : To disable an Apache2 mod.
- **a2enconf** (**a**pache**2** **en**able **Config**) : To enable a specific config.
- **a2disconf** (**a**pache**2** **dis**able **config**) : To disable a specific config.
- **a2ensite**(**a**pache**2** **en**able **Site**) : To enable a specific app.
- **a2dissite** (**a**pache**2** **dis**able **Site**) : To disable a specific app.

Enable rewrite mode

```sh
sudo a2enmod rewrite
sudo systemctl restart apache2
```

This Gif take you around the most important Apache directories.

![](https://cdn-images-1.medium.com/max/800/1*Ewi-JLOM5ikd4xJydP5Avw.gif)

You can learn more about Apache config and Linux in this [article](https://www.linode.com/docs/web-servers/apache/apache-web-server-debian-8)

#### Install MySQL

```sh
sudo apt-get install mysql-server
```

Click Enter to validate the first popup, then create a password for your Mysql root user. it’s highly recommended to secure Mysql server by running :

```sh
mysql_secure_installation
```

You can read more about improving [MySQL installation security](https://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html)

To mange database, there is a lot of SQL clients to use with MySQL like [MySQL Workbench](https://dev.mysql.com/doc/workbench/en/wb-installing-linux.html), [SQuirreL](http://squirrel-sql.sourceforge.net/), [SQLECTRON](https://sqlectron.github.io/) or the great Google Extension [**Chrome MySQL Admin**](https://chrome.google.com/webstore/detail/chrome-mysql-admin/ndgnpnpakfcdjmpgmcaknimfgcldechn?hl=en) .

#### Install PHP :

```sh
sudo add-apt-repository -y ppa:ondrej/php
sudo apt-get update


sudo apt-get install -y php7.1 php7.1-fpm libapache2-mod-php7.0 php7.1-cli php7.1-curl php7.1-mysql php7.1-sqlite3 \
 php7.1-gd php7.1-xml php7.1-mcrypt php7.1-mbstring php7.1-iconv

```

As you see above this large command will install php, php-cli and the most important php libraries.

#### Install Composer :

```sh
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
sudo chown -R $USER$HOME/.composer
```

Now you are ready to create your first Laravel app.

#### Test web Server

To test your LAMP server, just create a Laravel application under Apache2 root directory.

```sh
cd /var/www/html
`composer create-project --prefer-dist laravel/laravel lara_app`
```

Open your browser and you can access to your app through :

[http://localhost](http://localhost/)/lara_app/public

---

### Bonus

In this section you will discover how you can create a Laravel application with custom domain name outside apache2 directory.

first create a config file under /etc/apache2/sites-available directory.

```sh
cd /etc/apache2/sites-available
sudo touch lara_app.conf
```

Past and update DocumentRoot and Directory with your app folder inside the file.

```txt

<VirtualHost \*:80>

ServerName lara_app.dev

ServerAdmin webmaster@localhost

DocumentRoot /media/disk2/Work/lara_app/public/

<Directory /media/disk2/Work/lara_app/public/>

Options Indexes FollowSymLinks

AllowOverride None

Require all granted

</Directory>


</VirtualHost>

```

Next, give to your custom folder the permission to execute

```sh
chmod -R 755 /media/disk2/Work/lara_app/public/
```

Then disable the default site and enable you new lara_app site.

```sh
sudo a2dissite 000-default
sudo a2ensite lara_app
```

At last, you can configure the lara_app.dev domain name by adding this line into /etc/hosts file.

# /etc/hosts

```js
127.0.0.1 localhost
127.0.0.1 lara_app.dev
127.0.1.1 youssouf-Latitude-E6410
```

Now you can access to your app through your custom domain name : http://lara_app.dev

---

Thanks for reading! If you think other people should read this, clap for me, tweet and share the post. Remember to follow me on Medium so you can get notified about my future posts.
