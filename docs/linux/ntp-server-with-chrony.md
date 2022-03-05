---
title: Chrony - Servidor NTP
description: Configurando o chony como servidor e cliente NTP
---
<head>
    <meta name="description" context="Configurando o chony como servidor e cliente NTP" />
    <meta name="keywords" context="chrony, ntp, server, chronyd, chronyc" />
</head>

Chrony é o server e cliente padrão para NTP nas distribuições RHEL e AlmaLinux.
Chrony funciona tanto como servidor NTP, quanto cliente.

## Instalando Chrony

```bash
dnf install chrony -y
systemctl enable chronyd
```
### Configurando Server NTP

O arquivo de configuração do Chrony é ```/etc/chrony.conf```. 

:::tip
Segundo a documentação, o **server** é utilizado para especificar uma origem. O parâmetro **pool** carrega vários servidores NTP, ele se encarrega de resolver os multiplos endereços. 
:::

```bash
server 0.br.pool.ntp.org iburst
server 1.br.pool.ntp.org iburst
server 2.br.pool.ntp.org iburst
server 3.br.pool.ntp.org iburst
```

ou

```bash
pool pool.ntp.org iburst maxsources 3
```

Ainda no arquivo ```/etc/chrony.conf``` é encessário habilitar o acesso para o Chrony funcionar como servidor NTP

```bash
#allow 192.168.0.0/16
allow 192.168.1.0/24 # habilitando para rede interna, editar conforme necessidade
```

Finalizada a edição do arquivo de configuração do Chrony, é necessário reiniciar o serviço:

```bash
systemctl restart chronyd
```

### Configurando o firewall

```bash
firewall-cmd --add-service=ntp --permanent
firewall-cmd --reload
```

## Instalando Chrony na máquina cliente

```bash
dnf install chrony -y
systemctl enable chronyd
```

### Editar cliente NTP

```bash
vim /etc/chrony.conf

server 192.168.1.253 # IP ou nome da máquina onde foi configurado o chrony server

systemctl restart chronyd
```

Verificando se as configurações foram ativas:

```bash
chronyc sources
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^? 192.168.10.253                3   6     1    32  -2043ms[-2043ms] +/- 7462us
```

Acesse novamente o NTP server e verifique os clientes conectados:

```bash
chronyc clientes
Hostname                      NTP   Drop Int IntL Last     Cmd   Drop Int  Last
===============================================================================
192.168.10.24                   3      0   6   -    36       0      0   -     -
```

:::info
Consulte a página de [exemplos](https://chrony.tuxfamily.org/examples.html) do Chony para mais informações.
A documentação do arquivo ```/etc/chrony.conf``` pode ser acessada [aqui](https://chrony.tuxfamily.org/doc/4.1/chrony.conf.html).
:::