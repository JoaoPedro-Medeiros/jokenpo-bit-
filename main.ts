let jogada = 0
let pontos_microbit = 0
let pontos_jogador = 0
let pontos_jogador_2 = 0
basic.forever(function () {
    basic.pause(1000)
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        basic.showString("PvM")
        basic.showString("Go!")
        while (true) {
            basic.clearScreen()
            basic.showString("Jokenpo")
            jogada = randint(1, 3)
            if (jogada == 1) {
                basic.showIcon(IconNames.Diamond)
                basic.pause(200)
            } else if (jogada == 2) {
                basic.showIcon(IconNames.Square)
                basic.pause(200)
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(200)
            }
            while (true) {
                if (input.isGesture(Gesture.LogoDown)) {
                    basic.clearScreen()
                    basic.showIcon(IconNames.Asleep)
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    pontos_jogador += 1
                    basic.clearScreen()
                    basic.showIcon(IconNames.Happy)
                    break;
                } else if (input.buttonIsPressed(Button.A)) {
                    pontos_microbit += 1
                    basic.clearScreen()
                    basic.showIcon(IconNames.Sad)
                    break;
                }
            }
            if (pontos_jogador > 2 || pontos_microbit > 2) {
                break;
            }
        }
        basic.clearScreen()
        basic.showString("Placar")
        basic.showString("Microbit:")
        basic.showNumber(pontos_microbit)
        basic.clearScreen()
        basic.showString("Jogador:")
        basic.showNumber(pontos_jogador)
        pontos_microbit = 0
        pontos_jogador = 0
        basic.clearScreen()
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.clearScreen()
        basic.showString("PvP")
        basic.showString("Go!")
        while (true) {
            basic.showIcon(IconNames.Asleep)
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    pontos_jogador += 1
                    basic.showIcon(IconNames.Yes)
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    pontos_jogador_2 += 1
                    basic.showIcon(IconNames.Yes)
                    break;
                }
            }
            if (pontos_jogador > 2 || pontos_jogador_2 > 2) {
                break;
            }
        }
        basic.clearScreen()
        basic.showString("Placar")
        basic.showString("1:")
        basic.showNumber(pontos_jogador)
        basic.clearScreen()
        basic.showString("2:")
        basic.showNumber(pontos_jogador_2)
        pontos_jogador = 0
        pontos_jogador_2 = 0
        basic.clearScreen()
    }
})
