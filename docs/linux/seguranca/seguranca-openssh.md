---
title: Segurança com OpenSSH
description: Implementar mecanismos de segurança pro serviço SSH
keywords: [segurança, openssh, chave publica]
---

## Utilizar chave pública para efetuar login

Ao gerar um par de chaves, os arquivos são salvos em ```~/.ssh```

Podemos utilizar os seguintes algoritmos para geração de chaves:

**dsa**, **ecdsa**, **ecdsa-sk**, **ed25519**, **ed25519-sk**, **rsa**

:::danger
Algoritomos **dsa** e **rsa 1024** possuem criptografia fraca, evite usar!
:::

### Gerando par de chaves

```bash
ssh-keygen -b bits -t algorithm -C comment -f output_keyfile

# Salvando no diretório padrão. Ex: ~/.ssh/id_rsa_ e ~/.ssh/id_rsa.pub
ssh-keygen -b 4096 -t rsa -C "Comentário para identificar a chave" 

# Arquivos salvos em ~/.ssh/ed_25519_desenv e ~/.ssh/ed_25519_desenv.pub
ssh-keygen -t ed25519 -C "Outro comentário" -f ~/.ssh/id_ed25519_desenv
```

### Importando na máquina destino

```bash
# utilizado quando a chave pública foi gerada em local fora do padrão
ssh-copy-id -i ~/.ssh/id_ed25519_desenv.pub user@host 

# Copiando a chave padrão. Ex: ~/.ssh/id_rsa.pub ou ~/.ssh/id_ed25519.pub
ssh-copy-id user@host
```

Basta realizar login normalmente com ```ssh user@host```

### Desativar login utilizando senha

```bash
vim /etc/ssh/sshd_config

PubkeyAuthentication yes

PermitEmptyPasswords no
```

### Desativar login com root

```bash
vim /etc/ssh/sshd_config

PermitRootLogin no
ChallengeResponseAuthentication no
PasswordAuthentication no
```