---
title: Criação de grupo especial
description: Criação do grupo para não utilizar usuário root
keywords: [segurança, visudo, sudoers, root]
---

# Criando grupo especial para não utilizar usuário root

### Criação do grupo
```bash
groupadd andreazi
```
### Criação do usuário e adicionando ao grupo
```bash
useradd -m -s /bin/bash -c "Erik Andreazi" erik
useradd -aG andreazi erik
```
| Parâmetro | descrição                         |
| --------- | --------------------------------- |
| -m        | Cria diretório pessoal do usuário |
| -s        | Shell de login                    |
| -c        | Comentário                        |

### Criar arquivo em sudoers.d
```bash
vim /etc/sudoers.d/andreazi

%andreazi ALL=(ALL:ALL) NOPASSWD:ALL
```

Basta efetuar o login com a nova conta. Sempre utilizar o sudo antes de qualquer comando.