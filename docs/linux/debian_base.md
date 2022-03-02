---
sidebar_position: 1
title: Supressão de ruído no Linux
description: Utilizando o PulseAudio para habilitar o cancelamento de reuídos
---
<head>
    <meta name="description" context="Utilizando o PulseAudio para habilitar o cancelamento de reuídos" />
    <meta name="keywords" context="supressão, ruído, pulseaudio" />
</head>

## Remover ruídos no microfone, via PulseAudio

```bash
pactl load-module module-echo-cancel aec_method=webrtc sink_properties=device.description="Noise_Reduction" aec_args="analog_gain_control=0\ digital_gain_control=0"
```

Essa configuração permanece ativa até a reinicialização/desligamento da máquina

### Tornando permanente

```bash
vim /etc/pulse/default.pa

load-module module-echo-cancel aec_method=webrtc sink_properties=device.description="Noise_Reduction" aec_args="analog_gain_control=0\ digital_gain_control=0"
```

:::info
Um novo dispositivo será adicionado nas entras de som do Linux.
Ele melhora o áudio e remove o controle automático que o PulseAudio faz.
:::

| Dispositivo de Saída                      | Dispositivo de Entrada                        |
| ----------------------------------------- | --------------------------------------------- |
| ![Saida](/img/linux/pulseaudio_saida.png) | ![Entrada](/img/linux/pulseaudio_entrada.png) |

:::note
É necessário reiniciar a máquina para tornar definitivo.
:::

Esse tutorial foi baseado em uma postagem no [Viva o Linux](https://www.vivaolinux.com.br/dica/Habilitando-supressao-de-ruido-no-PulseAudio).
