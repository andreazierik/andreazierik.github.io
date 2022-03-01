---
sidebar_position: 1
title: Instalação do Zabbix no formato modular
description: Instalação no formato modular
---

Nesse tutorial vamos utilizar 3 máquinas.

:::info
Utilizei a distribuição AlmaLinux 8.5. SELinux e IPv6 estão desabilitados.
:::

| IP             | Nome           | Descrição                          |
| -------------- | -------------- | ---------------------------------- |
| 192.168.10.251 | Front-end      | Web Server e Front-end do Zabbix |
| 192.168.10.252 | Back-end       | Zabbix Server                      |
| 192.168.10.253 | Banco de dados | Armazenar as informações do Zabbix |

Vamos começar com a instalação e configuração do Banco de dados.

:::info
O Banco de dados suportado pelo Zabbix é o MySQL e PostgreSQL.

Nesse tutorial utilizaremos o MySQL.
:::

```bash
dnf install mysql-server -y

systemctl enable --now mysqld
```

Após efetuar a instalação do MySQL, vamos configurar:
```bash
mysql_secure_installation

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: Yes

There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:  1

Please set the password for root here.

New password: 

Re-enter new password: 

Estimated strength of the password: 100 
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : Yes

Remove anonymous users? (Press y|Y for Yes, any other key for No) : Yes

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Yes

Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Yes

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Yes
```

Vamos acessar o MySQL, criar o banco de dados e usuários do Zabbix

```bash
mysql -uroot -p

mysql> CREATE DATABASE zabbix CHARACTER SET utf8 COLLATE utf8_bin;
mysql> CREATE USER zabbix_web@192.168.10.251 (IP_FRONTEND) IDENTIFIED BY 'PASSWORD';
mysql> CREATE USER zabbix_srv@192.168.10.252 (IP_ZABBIX-SERVER) IDENTIFIED BY 'PASSWORD';

mysql> GRANT ALL PRIVILEGES ON zabbix.* to 'zabbix_srv'@192.168.10.252;
mysql> GRANT select, update, delete, insert ON zabbix.* TO 'zabbix_web'@192.168.10.251;
```

Finalizada a instalão e configuração do Banco de dados, vamos começar a instalar o Zabbix Front-end.
Acessa a máquina 192.168.10.251

```bash
rpm -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/8/x86_64/zabbix-release-5.0-1.el8.noarch.rpm
dnf clean all

dnf install zabbix-web-mysql zabbix-apache-conf -y

vim /etc/php-fpm.d/zabbix.conf
; php_value[data.timezone] = Europe/Riga # descomentar e alterar para America/Sao_Paulo

systemctl restart httpd php-fpm
systemctl enable htppd php-fpm
```

Partiremos para instalação do Zabbix Server, na máquina 192.168.10.252

```bash
rpm -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/8/x86_64/zabbix-release-5.0-1.el8.noarch.rpm
dnf clean all

dnf install zabbix-server-mysql zabbix-agent -y
dnf install mysql -y # cliente mysql

zcat /usr/share/doc/zabbix-server-mysql/create.sql.gz | mysql -h192.168.10.253 -uzabbix_srv -p zabbix

vim /etc/zabbix/zabbix_server.conf

DBHost=192.168.10.253 
DBUser=zabbix
DBPassword=(Senha definida)

systemctl restart zabbix-server zabbix-agent
systemctl enable zabbix-server zabbix-agent
```

Acesse, via browser, o IP 192.168.10.251/zabbix. A tela de boas vindas, com o Wizard de instalação será exibida.
Basta passarmos as informações de acesso:

![Zabbix DB Connection](/img/zabbix_db_connection.png)

![Zabbix Server Details](/img/zabbix_server_details.png)

Se tudo der certo será exibida uma tela informando que a instalação do Zabbix Front-end foi bem sucedida

![You have successfully installed Zabbix frontend](/img/finish_install.png)