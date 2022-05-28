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

:::info
Efetuar as próximas etapas após importar a chave e garantir o funcionamento.   
Todas as alterações serão feitas no arquivo vim ***/etc/ssh/sshd_config***
:::

###  Alterar os parâmetros de autenticação

```bash
PermitRootLogin no
MaxAuthTries 3
PubkeyAuthentication yes
PermitEmptyPasswords no
PasswordAuthentication no
ChallengeResponseAuthentication no
AllowUsers (NOME DOS USUÁRIOS PERMITIDOS PELO LOGIN)
ClientAliveInterval 600 (tempo em segundos)
```

:::tip
Alterar a porta padrão do SSH ou utilizar regras no firewall apontando para outro porta.   
Isso aumenta ainda mais a segurança.
:::